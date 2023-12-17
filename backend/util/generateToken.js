const jwt=require('jsonwebtoken');


//json web token see video 10 from 30:00 this is for generate token line in userController

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports=generateToken;