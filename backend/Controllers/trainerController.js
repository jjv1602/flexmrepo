const asyncHandler = require('express-async-handler')
const db = require("../config/db");
const generateToken = require('../util/generateToken');
const cookieparser = require('cookie-parser');


const addTrainer=asyncHandler(async(req,res)=>{try{}catch(e){res.json(e.message)}});
const deleteTrainer=asyncHandler(async(req,res)=>{try{}catch(e){res.json(e.message)}});
const updateTrainer=asyncHandler(async(req,res)=>{try{}catch(e){res.json(e.message)}});

module.exports={addTrainer,deleteTrainer,updateTrainer};