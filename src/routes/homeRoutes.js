const express = require('express');
const router = express.Router();
const { authMiddleware, adminMiddleware, userMiddleware } = require('../middleware/authMiddleware.js');

// Admin Home
router.get('/homeadmin', authMiddleware, adminMiddleware, (req, res) => {
  res.status(200).json({ message: 'Selamat datang di halaman Admin!' });
});

// User Home
router.get('/homeuser', authMiddleware, userMiddleware, (req, res) => {
  res.status(200).json({ message: 'Selamat datang di halaman User!' });
});

module.exports = router;
