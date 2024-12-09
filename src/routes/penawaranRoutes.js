const express = require('express');
const {authMiddleware, userMiddleware} = require('../middleware/authMiddleware');
const { buatPenawaran, lihatPenawaran } = require('../controllers/penawaranController');
const { viewLapangan } = require('../controllers/viewLapanganController');
const router = express.Router();

router.get('/penawaran/view', authMiddleware, userMiddleware, viewLapangan);
router.get('/penawaran/history', authMiddleware, userMiddleware, lihatPenawaran);
router.post('/penawaran/create', authMiddleware, userMiddleware, buatPenawaran);


module.exports = router;