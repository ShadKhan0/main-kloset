const express = require("express");
const router = express.Router();
const Model = require("../models/userModel");

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