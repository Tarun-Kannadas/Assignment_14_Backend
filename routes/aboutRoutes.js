import express from "express";
import About from "../models/About.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await About.findOne();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ POST new contact page data
router.post("/", async (req, res) => {
  try {
    const newAbout = new About(req.body);
    await newAbout.save();
    res.status(201).json({ message: "About page added successfully!", newAbout });
  } catch (error) {
    res.status(400).json({ message: "Error adding contact data", error });
  }
});

export default router;
