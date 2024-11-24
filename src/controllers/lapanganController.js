const db = require('../config/db.js');


const createLapangan = async (req, res) => {
    const { nama, lokasi, jenis_olahraga, deskripsi, harga } = req.body;
  
    try {
      await db.query(`CALL create_lapangan($1, $2, $3, $4, $5)`, [nama, lokasi, jenis_olahraga, deskripsi, harga]);
      res.status(201).json({ message: 'Lapangan berhasil ditambahkan.' });
    } catch (error) {
      res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
    }
  };
  

  const showLapangan = async (req, res) => {
    try {
      const { rows } = await db.query(`SELECT * FROM show_lapangan()`);
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
    }
  };
  

  const updateLapangan = async (req, res) => {
    const { lapangan_id } = req.params;
    const { nama, lokasi, jenis_olahraga, deskripsi, harga } = req.body;
  
    try {
      await db.query(`CALL update_lapangan($1, $2, $3, $4, $5, $6)`, [lapangan_id, nama, lokasi, jenis_olahraga, deskripsi, harga]);
      res.status(200).json({ message: 'Lapangan berhasil diperbarui.' });
    } catch (error) {
      res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
    }
  };
  

  const deleteLapangan = async (req, res) => {
    const { lapangan_id } = req.params;
  
    try {
      await db.query(`CALL delete_lapangan($1)`, [lapangan_id]);
      res.status(200).json({ message: 'Lapangan berhasil dihapus.' });
    } catch (error) {
      res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
    }
  };
  
  module.exports = {
    createLapangan,
    showLapangan,
    updateLapangan,
    deleteLapangan
  };