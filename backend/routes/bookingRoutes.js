const express=require('express')

const router=express.Router();
const {protect}=require('../middlewares/authMiddleware');
const {addBooking, deleteBooking,getBookingByUserId}=require('../Controllers/bookingController');



router.route('/:userid').get(getBookingByUserId);
router.route('/add').post(addBooking);
router.route('/deletebking/:id').delete(deleteBooking);





module.exports=router;