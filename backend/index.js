require ("dotenv").config();

const express = require ("express");
const mongoose = require ("mongoose");
const cookieParser = require("cookie-parser");
const cors = require ("cors");
const bcrypt = require("bcryptjs");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require ("./model/OrdersModel.js");
const { UsersModel } = require("./model/UsersModel.js");

const { Signup, Login, Logout } = require ("./Controllers/AuthController.js");
const { userVerification } = require("./Middlewares/AuthMiddleware.js");


const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }));  // This enables CORS for all routes.
app.use(cookieParser());

// Middleware to parse JSON request bodies
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data (e.g., from HTML forms)


app.get('/verify-user', userVerification, (req, res) => {
    // If userVerification successfully populates req.user
    if (req.user) {
        // Only send necessary user data, not the full Mongoose document or internal objects
        const userToSend = {
            _id: req.user._id,
            username: req.user.username, // Make sure your user model has 'username'
            email: req.user.email,
            // Add other non-sensitive fields needed by frontend
        };
        return res.json({ success: true, user: userToSend });
    }
    // This case should ideally be handled by userVerification sending 401/403
    return res.status(401).json({ success: false, message: "Unauthorized" });
});

app.get("/allHoldings", async(req,res)=> {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res)=> {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

//orders.
app.get("/allOrders", async (req,res)=> {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

//New Orders.
app.post("/newOrder", async(req,res)=> {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save()
  
  res.send("Order saved!");
});

//User.
app.get("/user", async (req, res) => {
    try {
        let allUsers = await UsersModel.find({});
        const usersToSend = allUsers.map(user => ({
            _id: user._id,
            username: user.username,
            email: user.email,
            // Do NOT include password hashes or sensitive info
        }));
        res.json(usersToSend);
    } catch (error) {
        console.error("Error fetching all users:", error);
        res.status(500).json({ success: false, message: "Error fetching users" });
    }
});

//Signup.
app.post("/signup", Signup );

//Login.
app.post("/login", Login );

//logout.
app.post("/logout", Logout );


async function connectToDatabase() {        //MongoDB Coonection.
  try {
    await mongoose.connect(url);
    console.log('MongoDB connection successful!');   // Application logic here
  } catch (err) {
    console.error(err);    // Handle the error
  }
}
connectToDatabase();

//server Connection.
app.listen(PORT, () => {
    console.log("server is Listening");
});



// app.get("/addHoldings", async(req,res)=>{
//     let tempHoldings =  [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

//   tempHoldings.forEach((holding)=>{
//       let newHolding = new HoldingsModel({
//         name: holding.name,
//         qty: holding.qty,
//         avg: holding.avg,
//         price: holding.price,
//         net: holding.net,
//         day: holding.day,
//       });

//       newHolding.save();
//     });
//     res.send("Done!");
// } );

//   app.get("/addPositions", async(req,res)=>{
//       let tempPositions = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];
//     tempPositions.forEach((positions)=>{
//         let newPosition = new PositionsModel ({
//           product: positions.product,
//           name: positions.name,
//           qty: positions.qty,
//           avg: positions.avg,
//           price: positions.price,
//           net: positions.net,
//           day: positions.day,
//           isLoss: positions.isLoss,
//         });
//         newPosition.save();
//     })
//     res.send("done!");
//   });
