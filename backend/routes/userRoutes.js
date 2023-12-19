const express=require('express')

const router=express.Router();
const {protect}=require('../middlewares/authMiddleware');
const {authUser,registerUser,generateRefreshtoken,updateDetails}=require('../Controllers/userController');

router.route('/').post(registerUser);
router.route('/auth').post(authUser);
router.route('/refresh').post(generateRefreshtoken);

router.route('/update').put(updateDetails);



module.exports=router;