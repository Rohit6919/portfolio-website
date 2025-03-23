const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Fixed model import

// POST request to save contact data
router.post("/", async (req, res) => {
    try {
        const { fullname, email, phone, message } = req.body;

        if (!fullname || !email || !phone || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newContact = new Contact({ fullname, email, phone, message });
        await newContact.save();

        res.status(201).json({
            message: "Data updated successfully",
            data: newContact
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

// GET request to fetch all contacts
router.get("/", async (req, res) => {
    try {
        const contacts = await Contact.find(); // Fetch all contact records from MongoDB
        res.status(200).json(contacts);
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});


module.exports = router;
