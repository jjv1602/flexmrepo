const asyncHandler = require('express-async-handler')
const db = require("../config/db");
const generateToken = require('../util/generateToken');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
const registerUser = asyncHandler(async (req, res) => {
    const { fname, lname, email, pwd, age } = req.body;
    try {
        const { rows } = await db.query('Select * from users where email=$1', [email]);
        if (rows.length > 0) {
            throw new Error('User Already Exists');
        }
        const hashpwd = await bcrypt.hash(pwd, 12);
        await db.query('Insert into users(fname,lname,email,pwd,age) values($1,$2,$3,$4)', [fname, lname, email, hashpwd, age]);

        res.status(200).json({
            email: email,
            pwd: hashpwd,
            fname: fname,
            lname: lname,
            age: age
        })
    } catch (e) {
        res.status(409).json(e.message);
    }
});


const authUser = asyncHandler(async (req, res) => {
    const { email, pwd } = req.body;
    try {
        const user = await db.query('Select * from users where email=$1', [email]);
        if (user.rows.length == 0) {
            throw new Error('User does not exist!');
        }

        const isEqual = await bcrypt.compare(pwd, user.rows[0].pwd);

        if (!isEqual) {
            throw new Error('Password is incorrect!');
        }
        const accessToken = jwt.sign(
            { userId: user.rows[0].id, username: user.rows[0].email }, process.env.TOKEN_SECRET, { expiresIn: '1h' }
        );

        const refreshToken = jwt.sign({
            userId: user.rows[0].id, username: user.rows[0].email,
        }, process.env.TOKEN_SECRET, { expiresIn: '1d' });

        const totalbatch = await db.query('select * from bookings where user_id=$1', [user.rows[0].id]);
        console.log(totalbatch);
        const batchenrolled = totalbatch.rows.length;
        res
            .cookie('refreshToken', refreshToken, {
                httpOnly: true,
                sameSite: 'None', secure: true,
            })
            .header('authorization', accessToken)
            .status(200).json({
                userId: user.rows[0].id,
                email: user.rows[0].email,
                age: user.rows[0].age,
                fname: user.rows[0].fname,
                lname: user.rows[0].lname,
                accesstoken: accessToken,
                refreshToken: refreshToken,
                batches: batchenrolled
            });



    } catch (err) {
        res.status(407).json(err.message)
    }
});

const updateDetails = asyncHandler(async (req, res) => {
    const { email, fname, lname, age } = req.body;
    try {
        const data = await db.query('Update users set fname=$1,lname=$2,age=$3 where email=$4 Returning *', [fname, lname, age, email]);
        res.status(200).json(data.rows[0]);
    } catch (e) {
        res.status(409).json(e.message);
    }
})
const generateRefreshtoken = asyncHandler(async (req, res) => {
    const refreshToken = req.cookies['refreshToken'];
    if (!refreshToken) {
        return res.status(401).send('Access Denied. No refresh token provided.');
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.TOKEN_SECRET);
        const accessToken = jwt.sign({ user: decoded.user }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

        res
            .header('Authorization', accessToken)
            .send(decoded.user);
    } catch (error) {
        return res.status(400).send('Invalid refresh token.');
    }
})
// const update=asyncHandler(async(req,res)=>{
//   const { email, password } = req.body;
//   const user = await User.findOne({ email });
//   user.password = password;
//   console.log(user.password);
//   res.status(201).json("success");
// })
module.exports = { registerUser, authUser, generateRefreshtoken, updateDetails };