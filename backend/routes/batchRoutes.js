const express=require('express')

const router=express.Router();
const {protect}=require('../middlewares/authMiddleware');
const {getBatch,addBatch,deleteBatch,updateBatch}=require('../Controllers/batchController');

// if user goes to api/users/ - it is register page

router.route('/getBatches').get(getBatch);
router.route('/addBatch').post(addBatch);




module.exports=router;