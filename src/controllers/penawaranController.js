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


const lihatPenawaran = async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: "Email parameter is required." });
  }

  try {
    const { rows } = await db.query(`SELECT * FROM get_penawaran_user($1)`, [email]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "No penawaran found for the given email." });
    }

    res.status(200).json(rows);
  } catch (error) {
    console.error("Database error:", error); // Log error untuk debugging
    res.status(500).json({ message: "An error occurred while retrieving penawaran.", error: error.message });
  }
};




module.exports = {
    buatPenawaran,
    lihatPenawaran
};