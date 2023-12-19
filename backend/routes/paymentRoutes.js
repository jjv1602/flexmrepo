const express=require('express')

const router=express.Router();
const {protect}=require('../middlewares/authMiddleware');
const {payment }=require('./../Controllers/paymentController')



router.route('/transaction').post(payment);

module.exports=router;