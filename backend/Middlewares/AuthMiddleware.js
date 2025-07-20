// AuthMiddleware.js
const jwt = require("jsonwebtoken");
const { UsersModel } = require("../model/UsersModel");
require("dotenv").config(); // Ensure dotenv is configured for process.env.TOKEN_KEY

exports.userVerification = (req, res, next) => {

  const token = req.cookies.token;
  // console.log("Token from cookie (backend):", token);
  if (!token) {
    // console.log("No token found in cookie.");
    // Token missing, send unauthorized response
    return res.json({ success: false, message: "Unauthorized: No token provided" }); // Frontend expects 'success' not 'status'
  }

  // Verify the token
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      // console.log("JWT Verification Error:", err.message);
      // Token invalid or expired
      let message = "Unauthorized: Invalid token";
      if (err.name === 'TokenExpiredError') {
        message = "Unauthorized: Token expired";
      }
      return res.json({ success: false, message: message }); // Frontend expects 'success'
    }

    try {
      // Find the user based on the ID from the decoded token
      const user = await UsersModel.findById(data.id);
      console.log("User found in DB (backend):", user ? user.email : "None");

      if (!user) {
        // console.log("User not found for token ID.");
        // User not found in DB
        return res.json({ success: false, message: "Unauthorized: User not found" }); // Frontend expects 'success'
      }

      // If everything is good, attach the user object to the request
      // and call next() to pass control to the actual /verify-user route handler
      req.user = user; // <--- This attaches the full user object
      // console.log("User successfully verified. Calling next().");
      next(); // <--- CRUCIAL: Pass control to the next middleware/route handler

    } catch (dbError) {
      console.error("Database error during user lookup in userVerification:", dbError);
      return res.json({ success: false, message: "Internal server error during user lookup" });
    }
  });
};