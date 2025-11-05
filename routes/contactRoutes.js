// routes/contact.js (or contactRoutes.js)
import express from "express";
import Contact from "../models/Contact.js";
const router = express.Router();

// GET contact page data
router.get("/", async (req, res) => {
  try {
    const data = await Contact.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// POST new contact page data
router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Contact page added successfully!", newContact });
  } catch (error) {
    res.status(400).json({ message: "Error adding contact data", error });
  }
});

export default router;