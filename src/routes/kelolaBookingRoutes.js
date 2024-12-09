const express = require('express');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const { lihatDaftarBooking, updateBooking } = require('../controllers/kelolaBookingController');


const router = express.Router();

router.get('/booking/show', authMiddleware, adminMiddleware, lihatDaftarBooking);
router.patch('/booking/update', authMiddleware, adminMiddleware, updateBooking);


module.exports = router