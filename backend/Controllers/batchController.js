const asyncHandler = require('express-async-handler')
const db = require("../config/db");
const generateToken = require('../util/generateToken');
const cookieparser = require('cookie-parser');


const addBatch = asyncHandler(async (req, res) => {
    const { start, end, mx, trainer_id } = req.body;
    try {
        // Checking for any clash in batches
        const { rows } = await db.query('Select * from batches where trainer_id=$1 AND starttime=$2', [trainer_id, start]);
        if (rows.length > 0) {
            throw new Error('Trainer Clashing Cannot Add Batch');
        }

        // When adding keep avaiable seats= maximum_seats
        await db.query('Insert into batches(starttime,endtime,max_seats,available_seats,trainer_id) values($1,$2,$3,$4)', [start, end, mx, mx, trainer_id]);
        res.status(200).json({
            start: start,
            end: end,
            max_seats: mx,
            available_seats: mx,
            trainer_id: trainer_id
        })
    } catch (e) { res.json(e.message) }
});
const getBatch = asyncHandler(async (req, res) => {
    try {
        const { data } = await db.query("Select * from batches");
        res.status(200).json(data);
    } catch (e) { res.json(e.message) }
});
const deleteBatch = asyncHandler(async (req, res) => {
    const { id } = req.body;
    try {
        await db.query('Delete from batches where id=$1', { id });
        res.status(200).json("DELETED SUCCESSFULLY");
    } catch (e) { res.json(e.message) }
});
const updateBatch = asyncHandler(async (req, res) => {
    const { start, end, mx, trainer_id } = req.body;
    try {
        
        // When adding keep avaiable seats= maximum_seats
        await db.query('UPDATE batches Set starttime=$1,endtime=$2,max_seats=$3,available_seats=$4,trainer_id=$5) values($1,$2,$3,$4,$5)', [start, end, mx, mx, trainer_id]);
        res.status(200).json({
            start: start,
            end: end,
            max_seats: mx,
            available_seats: mx,
            trainer_id: trainer_id
        })
    } catch (e) { res.json(e.message) }
});

module.exports = { getBatch, addBatch, deleteBatch, updateBatch };