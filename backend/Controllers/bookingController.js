const asyncHandler = require('express-async-handler')
const db = require("../config/db");
const generateToken = require('../util/generateToken');
const cookieparser = require('cookie-parser');


const addBooking = asyncHandler(async (req, res) => {
    const { user_id, batch_id } = req.body;
    try {
        // Checking for any clash in bookings
        const { rows } = await db.query('Select * from bookings where user_id=$1 AND batch_id=$2', [user_id, batch_id]);
        if (rows.length > 0) {
            throw new Error('Batch Clashing Cannot Complete Booking');
        }

        const { data } = await db.query('Insert into bookings(user_id,batch_id) values($1,$2) Returning *', [user_id, batch_id]);
        res.status(200).json({
            booking_id: data.rows[0].id,
            user_id: data.rows[0].user_id,
            batch_id: data.rows[0].batch_id
        })
    }
    catch (e) { res.json(e.message) }
});
const deleteBooking = asyncHandler(async (req, res) => {
    const { id } = req.body;
    try {
        await db.query('Delete from bookings where id=$1', { id });
        res.status(200).json("DELETED SUCCESSFULLY");
    } catch (e) { res.json(e.message) }
});

const getBookingByUserId = asyncHandler(async (req, res) => {
    const { user_id } = req.params.id;
    try {
        // or can be const {data}
        const data=await db.query("Select * from bookings bk JOIN batches b on bk.batch_id= b.batch_id");
        res.json(data.rows);

    } catch (e) { res.json(e.message) }
})
module.exports = { addBooking, deleteBooking,getBookingByUserId };