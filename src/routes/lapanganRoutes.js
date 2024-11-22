// routes/lapanganRoutes.js
const express = require('express');
const router = express.Router();
const lapanganController = require('../controllers/lapanganController.js');
const {adminMiddleware, authMiddleware} = require('../middleware/authMiddleware.js');

router.post('/lapangan', adminMiddleware, lapanganController.createLapangan);
router.get('/lapangan', adminMiddleware, lapanganController.showLapangan);
router.put('/lapangan/:lapangan_id', adminMiddleware, lapanganController.updateLapangan);
router.delete('/lapangan/:lapangan_id', adminMiddleware, lapanganController.deleteLapangan);

module.exports = router;
