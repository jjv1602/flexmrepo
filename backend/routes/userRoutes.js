const express=require('express')

const router=express.Router();
const {protect}=require('../middlewares/authMiddleware');
const {authUser,registerUser,generateRefreshtoken}=require('../Controllers/userController');

// if user goes to api/users/ - it is register page

router.route('/').post(registerUser);
router.route('/auth').post(authUser);
router.route('/refresh').post(generateRefreshtoken);



module.exports=router;