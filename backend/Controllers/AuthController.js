const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const { UsersModel } = require("../model/UsersModel");

//For SignUp.
module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UsersModel.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
      next();
  }
  catch (error) {
    console.error(error);
  }
};

// For Login.
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if(!email && !password ){
      return res.json({message:'Email and Password required'})
    }
    const user = await UsersModel.findOne({ email });

    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }

    const auth = await bcrypt.compare(password,user.password);

    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }

    const userToSend = {
            _id: user._id,
            username: user.username, // <--- MAKE SURE THIS PROPERTY EXISTS ON YOUR USER MODEL
            email: user.email,
            // Add any other non-sensitive data you want the frontend to have
        };

    const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
    });

      res.status(200).json({
            message: "User logged in successfully",
            success: true,
            user: userToSend, // Send the plain user object
        });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// for logout.
module.exports.Logout = (req, res) => {
  try {
    // Clear the 'token' cookie.
    // The options (httpOnly, secure, sameSite, path) MUST match what was used when setting the cookie during login.
    res.clearCookie('token', {
      httpOnly: true,
    });

    // Optional: JWT Blacklisting - highly recommended for immediate invalidation
    // This requires a mechanism to store invalidated tokens (e.g., in a Redis cache
    // or a dedicated 'BlacklistedTokens' MongoDB collection) and for your
    // userVerification middleware to check this blacklist.
    //
    // Example (conceptual):
    // if (req.cookies.token) {
    //   const tokenToBlacklist = req.cookies.token;
    //   // Save tokenToBlacklist and its expiry to a database/cache
    //   // so userVerification can deny access for this token even if not expired
    // }

    return res.status(200).json({ message: 'Logged out successfully', success: true });

  } catch (error) {
    console.error("Error during logout:", error);
    // Even if there's a server-side error during cookie clearing,
    // we often tell the client it's successful to clear their local state.
    // However, you can choose to send a 500 error if you prefer.
    return res.status(500).json({ message: 'Error during logout process.', success: false });
  }
};