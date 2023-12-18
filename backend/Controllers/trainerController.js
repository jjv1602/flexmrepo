const asyncHandler = require('express-async-handler')
const db = require("../config/db");
const generateToken = require('../util/generateToken');
const cookieparser = require('cookie-parser');


const addTrainer = asyncHandler(async (req, res) => {
    const { name, role, img } = req.body;
    let imgurl=img;
    try {
        // Checking for any clash in bookings
        const { rows } = await db.query('Select * from trainers where name=$1 ', [name]);
        if (rows.length > 0) {
            throw new Error('Trainer already exist');
        }

        if(imgurl==null){imgurl="https://res.cloudinary.com/dxxu4powb/image/upload/v1678457241/trainer1_c7znsg.jpg"}
        const data  = await db.query('Insert into trainers(name,role,img) values($1,$2,$3) Returning *', [name, role, imgurl]);
        res.status(200).json({
            name: data.rows[0].name,
            desc: data.rows[0].role,
            img: data.rows[0].img
        })
    } catch (e) { res.json(e.message) }
});
const deleteTrainer = asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        await db.query('Delete from trainers where id=$1', { id });
        res.status(200).json("DELETED SUCCESSFULLY");
    } catch (e) { res.json(e.message) }
});
const updateTrainer = asyncHandler(async (req, res) => { try { } catch (e) { res.json(e.message) } });

module.exports = { addTrainer, deleteTrainer, updateTrainer };