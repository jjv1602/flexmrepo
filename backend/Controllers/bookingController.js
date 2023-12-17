const asyncHandler = require('express-async-handler')
const db = require("../config/db");
const generateToken = require('../util/generateToken');
const cookieparser = require('cookie-parser');


const addBooking=asyncHandler(async(req,res)=>{try{}catch(e){res.json(e.message)}});
const deleteBooking=asyncHandler(async(req,res)=>{try{}catch(e){res.json(e.message)}});
const updateBooking=asyncHandler(async(req,res)=>{try{}catch(e){res.json(e.message)}});

module.exports={addBooking,deleteBooking,updateBooking};