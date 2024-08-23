const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;