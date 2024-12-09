const express = require('express');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const { viewPenawaranAdmin, pesanPersetujuanPenawaran } = require('../controllers/kelolaPenawaranController.js');


const router = express.Router();


router.get('/penawaran/show', authMiddleware, adminMiddleware, viewPenawaranAdmin);
router.patch('/penawaran/update', authMiddleware, adminMiddleware, pesanPersetujuanPenawaran);


module.exports = router;