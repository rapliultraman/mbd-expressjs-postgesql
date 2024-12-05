const express = require('express');
const {authMiddleware, userMiddleware} = require('../middleware/authMiddleware');
const { buatPenawaran } = require('../controllers/penawaranController');
const router = express.Router();


router.post('/penawaran', authMiddleware, userMiddleware, buatPenawaran);

module.exports = router;