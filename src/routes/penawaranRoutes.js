const express = require('express');
const {authMiddleware, userMiddleware} = require('../middleware/authMiddleware');
const { buatPenawaran, lihatPenawaran } = require('../controllers/penawaranController');
const router = express.Router();


router.get('/penawaran/history', authMiddleware, userMiddleware, lihatPenawaran);
router.post('/penawaran', authMiddleware, userMiddleware, buatPenawaran);

module.exports = router;