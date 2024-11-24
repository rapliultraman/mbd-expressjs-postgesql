const express = require('express');
const {createBooking, getAvailableLapangan, cancelBooking} = require('../controllers/bookingController');
const { authMiddleware, userMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, userMiddleware, createBooking);
router.get('/available', authMiddleware, userMiddleware, getAvailableLapangan);
router.post('/cancelbook', authMiddleware, userMiddleware, cancelBooking);

module.exports = router;