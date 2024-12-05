// routes/lapanganRoutes.js
const express = require('express');
const router = express.Router();
const {createLapangan, showLapangan, updateLapangan, deleteLapangan}= require('../controllers/kelolaLapanganController.js');
const {adminMiddleware, authMiddleware} = require('../middleware/authMiddleware.js');

router.post('/lapangan', authMiddleware, adminMiddleware, createLapangan);
router.get('/lapangan', authMiddleware, adminMiddleware, showLapangan);
router.put('/lapangan/:lapangan_id', authMiddleware, adminMiddleware, updateLapangan);
router.delete('/lapangan/:lapangan_id', authMiddleware, adminMiddleware, deleteLapangan);

module.exports = router;
