const db = require("../config/db");

const viewPenawaranAdmin = async (req, res) => {
  try {
    const { rows } = await db.query(`SELECT*FROM get_penawaran_admin()`);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error saat mengambil data penawaran:", error);
    res
      .status(500)
      .json({ error: "Terjadi kesalahan saat mengambil data penawaran." });
  }
};







module.exports = {
    viewPenawaranAdmin
};
