const express = require('express');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const { viewPenawaranAdmin } = require('../controllers/kelolaPenawaranController.js');


const router = express.Router();


router.get('/penawaran/show', authMiddleware, adminMiddleware, viewPenawaranAdmin);


module.exports = router;