const express = require('express')
const {createBooking, getAvailableLapangan, cancelBooking, checkHistoryBook} = require('../controllers/bookingController');
const { authMiddleware, userMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/booking/available', authMiddleware, userMiddleware, getAvailableLapangan);
router.get('/booking/history', authMiddleware, userMiddleware, checkHistoryBook);
router.post('/booking/create', authMiddleware, userMiddleware, createBooking);
router.put('/booking/cancelbook', authMiddleware, userMiddleware, cancelBooking);

module.exports = router;