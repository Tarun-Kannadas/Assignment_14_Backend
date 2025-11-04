// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// ✅ GET all contact page data
router.get("/", async (req, res) => {
  try {
    const contactData = await Contact.find();
    res.status(200).json(contactData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact data", error });
  }
});

// ✅ GET a single contact page (useful if you only have one)
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: "Contact not found" });
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contact by ID", error });
  }
});

// ✅ POST new contact page data
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Contact page added successfully!", newContact });
  } catch (error) {
    res.status(400).json({ message: "Error adding contact data", error });
  }
});

module.exports = router;
