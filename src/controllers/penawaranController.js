const db = require("../config/db");

const buatPenawaran = async (req, res) => {
  const { email, namaLapangan, hargaPenawaran } = req.body;

  try {
    await db.query(`CALL make_penawaran($1,$2,$3)`, [
      email,
      namaLapangan,
      hargaPenawaran,
    ]);
    res.status(201).json({ message: "tawaran berhasil ditambahkan." });
  } catch (error) {
    res.status(500).json({ massage: "error bang" });
  }
};

module.exports = {
    buatPenawaran
};