const express = require("express");
const mongoose = require("mongoose");
const Complain = require("../../model/ComplainModel.js"); // Ensure the correct path

const router = express.Router();

// API to add a complaint
router.post("/add-complain", async (req, res) => {
  try {
    const { Category, Description, url } = req.body;

    // Check if all required fields are provided
    if (!Category || !Description || !url) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create a new complaint
    const newComplain = new Complain({
      Category,
      Description,
      url,
    });

    // Save to database
    await newComplain.save();

    res.status(201).json({
      message: "Complaint added successfully!",
      complain: newComplain,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding complaint", error: error.message });
  }
});

// API to get all complaints
router.get("/get-complains", async (req, res) => {
  try {
    const complains = await Complain.find();
    res.status(200).json({ complains });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching complaints", error: error.message });
  }
});

module.exports = router;
