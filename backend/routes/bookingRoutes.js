const express=require('express')

const router=express.Router();
const {protect}=require('../middlewares/authMiddleware');
const {addBooking, deleteBooking,getBookingByUserId}=require('../Controllers/bookingController');

// if user goes to api/users/ - it is register page

router.route('/:id').get(getBookingByUserId);
router.route('/add').get(addBooking);
router.route('/deletebking').post(deleteBooking);





module.exports=router;