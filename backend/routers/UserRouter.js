const express = require("express");
const router = express.Router();
const Model = require("../models/userModel");
const jwt = require("jsonwebtoken");
const SECRET_KEY = '32434242sglrplqpl2132'; // Replace with a secure secret key

// Add user
router.post("/add", async (req, res) => {
  try {
    // Check if user already exists based on a unique field (e.g., email)
    const existingUser = await Model.findOne({ email: req.body.email });

    if (existingUser) {
      // If user exists, return a conflict response
      return res.status(409).json({ message: "User already exists" });
    }

    // If user doesn't exist, create and save a new one
    const newUser = new Model(req.body);
    const result = await newUser.save();
    res.status(200).json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await Model.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords (plain-text)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h", // Token expiration time
    });

    // Respond with token and user info
    res.status(200).json({ message: "Login successful", token, user });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error", error: err });
  }
});

// Get user by ID
router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;