const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
const protect = asyncHandler(async (req, res, next) => {
  const accessToken = req.headers['authorization'];
  const refreshToken = req.cookies['refreshToken'];

  if (!accessToken && !refreshToken) {
    return res.status(401).send('Access Denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(accessToken, secretKey);
    req.user = decoded.user;
    next();
  } catch (error) {
    if (!refreshToken) {
      return res.status(401).send('Access Denied. No refresh token provided.');
    }

    try {
      const decoded = jwt.verify(refreshToken, process.env.TOKEN_SECRET);
      const accessToken = jwt.sign({ user: decoded.user }, process.env.TOKEN_SECRET, { expiresIn: '1h' });

      res
        .cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'strict' })
        .header('Authorization', accessToken)
        .send(decoded.user);
    } catch (error) {
      return res.status(400).send('Invalid Token.');
    }
  }
});

module.exports = { protect };
