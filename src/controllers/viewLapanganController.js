const db = require('../config/db');

const viewLapangan = async(req, res) => {
    try{
        const {rows} = await db.query(`SELECT * FROM view_daftar_lapangan()`);
        res.status(200).json(rows)
    }catch(error){
        res.status(500).json({massage: "error bang"});

    };
};


module.exports={
    viewLapangan
};
                              