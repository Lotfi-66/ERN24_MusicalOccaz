const express = require('express');
const multer = require('multer');
const Listing = require('../models/Listing');
const auth = require('../middleware/auth');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });

router.post('/', auth, upload.array('images', 4), async (req, res) => {
    try {
        const listing = new Listing({
            ...req.body,
            userId: req.userId,
            images: req.files.map(file => file.path)
        });
        await listing.save();
        res.status(201).json(listing);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const listings = await Listing.find().sort({ createdAt: -1 });
        res.json(listings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;