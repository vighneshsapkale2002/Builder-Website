// // routes/admin.js
// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// const Record = require("../models/Record");

// // Admin Login
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   // Example static admin (You can store in DB too)
//   if (email === "admin@gmail.com" && password === "admin123") {
//     const token = jwt.sign({ role: "admin" }, "SECRET_KEY", { expiresIn: "1h" });
//     return res.json({ token });
//   }

//   res.status(401).json({ message: "Invalid credentials" });
// });

// // Fetch all records (admin only)
// router.get("/records", (req, res) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) return res.status(403).json({ message: "Unauthorized" });

//   const token = authHeader.split(" ")[1];
//   jwt.verify(token, "SECRET_KEY", async (err, user) => {
//     if (err || user.role !== "admin") return res.status(403).json({ message: "Forbidden" });

//     const records = await Record.find();
//     res.json(records);
//   });
// });

// module.exports = router;
