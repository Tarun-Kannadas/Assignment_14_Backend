// routes/homeRoutes.js
const express = require('express');
const router = express.Router();
const Home = require('../models/Home');

// ✅ GET home content
router.get('/', async (req, res) => {
  try {
    const homeData = await Home.findOne();
    res.json(homeData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ POST new home content
router.post('/', async (req, res) => {
  try {
    const newHome = new Home(req.body);
    await newHome.save();
    res.status(201).json(newHome);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
