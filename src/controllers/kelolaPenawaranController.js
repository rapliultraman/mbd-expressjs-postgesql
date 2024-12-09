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

const pesanPersetujuanPenawaran = async(req, res) => {
 const { penawaran_id, status, pesan} = req.body;

 try {
  await db.query(`CALL admin_update_penawaran($1,$2,$3)`,[penawaran_id, status, pesan]);
  res.status(200).json({message:"penawaran berhasil di perbarui"});
 } catch (error) {
  res.status(500).json({message:"error bang"})
 }
};





module.exports = {
    viewPenawaranAdmin,
    pesanPersetujuanPenawaran
};
