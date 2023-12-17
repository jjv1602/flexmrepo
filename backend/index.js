// Import 
const express = require('express')
const path=require('path');
const dotenv=require('dotenv');
const app = express();
const authRoutes=require('./routes/userRoutes');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Express.json()
app.use(express.json());
app.use('/api/users',authRoutes)

const PORT=process.env.PORT || 5000;
app.listen(PORT,console.log(`Server started on port ${PORT} `));
