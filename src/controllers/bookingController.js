const db = require('../config/db.js');

const createBooking = async (req, res) => {
  const {
    email,
    namaLapangan,
    tanggalBooking,
    jamMulai,
    jamSelesai,
    penawaranId,
  } = req.body;

  if (!email || !namaLapangan || !tanggalBooking || !jamMulai || !jamSelesai) {
    return res.status(400).json({
      error: 'Semua parameter (email, namaLapangan, tanggalBooking, jamMulai, jamSelesai) harus diisi.',
    });
  }

  try {
    const { rows } = await db.query(
      `SELECT create_booking($1, $2, $3, $4, $5, $6) AS total_harga`,
      [email, namaLapangan, tanggalBooking, jamMulai, jamSelesai, penawaranId]
    );

    const totalHarga = rows[0].total_harga;

    res.status(201).json({
      message: 'Booking berhasil dibuat.',
      totalHarga,
    });
  } catch (error) {
    console.error('Error saat membuat booking:', error);
    res.status(500).json({
      error: 'Terjadi kesalahan saat membuat booking.',
    });
  }
};

const getAvailableLapangan = async (req, res) => {
  const { tanggal } = req.query;

  if (!tanggal) {
    return res.status(400).json({ error: 'Tanggal harus disertakan dalam permintaan.' });
  }

  try {
    const { row } = await db.query(
      `SELECT * FROM get_available_lapangan($1);`,
      [tanggal]
    );

    res.status(201).json(row);
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

const checkHistoryBook = async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: 'Email harus dimasukkan!' });
  }

  try {
    const { rows } = await db.query(`SELECT * FROM get_booking_history($1)`, [email]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Tidak ada riwayat booking untuk email ini.' });
    }

    res.status(200).json(rows);
  } catch (error) {
    console.error('Error saat mengambil riwayat booking:', error);
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data riwayat booking.' });
  }
};


module.exports = {
  createBooking,
  getAvailableLapangan,
  cancelBooking,
  checkHistoryBook
};
