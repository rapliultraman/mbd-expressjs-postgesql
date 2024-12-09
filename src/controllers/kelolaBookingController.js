const db = require('../config/db')


const lihatDaftarBooking = async(req, res) =>{
    const { user_id, lapangan_id, status } = req.query;

    try {
        const {rows} = await db.query(`SELECT * FROM get_daftar_booking($1, $2, $3)`, [user_id || null, lapangan_id || null, status || null]);
        res.status(200).json(rows);
    } catch (error) {
     res.status(500).json({message:"error bang"}); 
    };
};

const updateBooking = async(req, res) => {
    const {booking_id, status} = req.body;

    try {
       await db.query(`CALL update_status_booking($1, $2)`, [booking_id, status]);
       res.status(200).json({message:"update berhasil di tambahkan"}); 
    } catch (error) {
        res.status(500).json({message:"error bang"});
    };
};


module.exports={
    lihatDaftarBooking,
    updateBooking
}