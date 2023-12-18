const express=require('express')

const router=express.Router();
const {protect}=require('../middlewares/authMiddleware');
const {addTrainer,deleteTrainer,updateTrainer}=require('../Controllers/trainerController');

router.route('/add').post(addTrainer);
router.route('/del/:id').delete(deleteTrainer);

module.exports=router;