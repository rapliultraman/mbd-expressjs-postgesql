const db = require('../config/db');


const getAllCustomers = async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM get_all_customers()`);
    res.status(200).json({ customers: result.rows });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan pada server' });
  }
};

const deleteCustomer = async (req, res) => {
  const { userId } = req.params;

  try {
    await db.query(`CALL delete_customer($1)`, [userId]);
    res.status(200).json({ message: 'Pelanggan berhasil dihapus' });
  } catch (error) {
    if (error.message.includes('Hanya pelanggan yang dapat dihapus')) {
      res.status(403).json({ error: 'Hanya pelanggan yang dapat dihapus' });
    } else {
      res.status(500).json({ error: 'Terjadi kesalahan pada server' });
    }
  }
};

module.exports = { getAllCustomers, deleteCustomer };
