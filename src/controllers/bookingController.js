const db = require('../config/db.js');

const createBooking = async (req, res) => {
  const { email, nama_lapangan, tanggal_booking, jam_mulai, jam_selesai, penawaran_id } = req.body;
  try {
    const result = await db.query(
      `CALL create_booking($1, $2, $3, $4, $5, $6);`,
      [email, nama_lapangan, tanggal_booking, jam_mulai, jam_selesai, penawaran_id || null]
    );
    res.status(201).json({ message: 'Booking berhasil dibuat.', result });
  } catch (error) {
    if (error.code === 'P0001') {
      return res.status(400).json({ error: error.message });
    }
    console.error('Error saat membuat booking:', error);
    res.status(500).json({ error: 'Terjadi kesalahan saat membuat booking.' });
  }
};

const getAvailableLapangan = async (req, res) => {
  const { tanggal } = req.query;

  // Validasi input
  if (!tanggal) {
    return res.status(400).json({ error: 'Tanggal harus disertakan dalam permintaan.' });
  }

  try {
    const { rows } = await db.query(
      `SELECT * FROM get_available_lapangan($1);`,
      [tanggal]
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error('Error saat mengambil lapangan tersedia:', error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil lapangan tersedia.' });
  }
};

const cancelBooking = async (req, res) => {
  const {email, booking_id} = req.body;

  try{
   await db.query(`CALL cancel_booking($1, 2$)`[email, booking_id]);
   res.status(201).json({ message: 'Booking berhasil dicancel.'});
  }catch(error){
    console.error('Error saat cancel booking:', error);
    res.error(500).json({message: 'error bang'});
  }
};

module.exports = {
  createBooking,
  getAvailableLapangan,
  cancelBooking
};
