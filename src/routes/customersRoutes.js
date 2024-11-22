const express = require('express');
const { getAllCustomers, deleteCustomer } = require('../controllers/customerController.js');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware.js');

const router = express.Router();

// Rute untuk mendapatkan semua pelanggan (bukan admin)
router.get('/customers', authMiddleware, adminMiddleware, getAllCustomers);

// Rute untuk menghapus pelanggan berdasarkan ID (admin saja)
router.delete('/customers/:userId', authMiddleware, adminMiddleware, deleteCustomer);

module.exports = router;
