const db = require('../config/db');

const createRatingReview = async(req, res) =>{
    const { email, nama_lapangan, rating, review, booking_id} = req.body;

    try {
        await db.query(`CALL add_rating_review($1, $2, $3, $4, $5)`, [email, nama_lapangan, rating, review, booking_id]);
        res.status(200).json({message:"rating dan review berhasil di tambahkan"});
    } catch (error) {
        res.status(500).json({message:"error bang"});
    };
};

const getRatingReview = async(req, res) => {
    const {nama_lapangan} = req.query;

    try {
        const {rows}= await db.query(`SELECT*FROM get_rating_review($1)`,[nama_lapangan]);
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({message: "error bang"});
    };

};

module.exports = {
    createRatingReview, 
    getRatingReview
}