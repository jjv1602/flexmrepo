const asyncHandler = require('express-async-handler')
const db = require("../config/db");
const payment = asyncHandler(async (req, res) => {
    const { user_id } = req.body;
    try {

        if (completepayment(user_id)) {
            await db.query('UPDATE bookings Set payment_done=$1 where user_id=$2', [false, user_id]);
        }
    } catch (e) { res.json(e.message) }
});

module.exports =  {payment }