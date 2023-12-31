const express=require('express')

const router=express.Router();
const {protect}=require('../middlewares/authMiddleware');
const {getBatch,addBatch,deleteBatch,updateBatch}=require('../Controllers/batchController');



router.route('/getbatches').get(getBatch);
router.route('/addbatch').post(addBatch);




module.exports=router;