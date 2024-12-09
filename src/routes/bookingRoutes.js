const express = require('express')
const {createBooking, getAvailableLapangan, cancelBooking, checkHistoryBook} = require('../controllers/bookingController');
const { authMiddleware, userMiddleware } = require('../middleware/authMiddleware');
const { viewLapangan } = require('../controllers/viewLapanganController');

const router = express.Router();

router.get('/booking/show', authMiddleware, userMiddleware, viewLapangan);
router.get('/booking/available', authMiddleware, userMiddleware, getAvailableLapangan);
router.get('/booking/history', authMiddleware, userMiddleware, checkHistoryBook);
router.post('/booking/create', authMiddleware, userMiddleware, createBooking);
router.patch('/booking/cancelbook', authMiddleware, userMiddleware, cancelBooking);

module.exports = router;






