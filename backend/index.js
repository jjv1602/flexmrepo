// Import 
const express = require('express')
const path=require('path');
const dotenv=require('dotenv');
const app = express();
const authRoutes=require('./routes/userRoutes');
const batchRoutes=require('./routes/batchRoutes');
const trainerRoutes=require('./routes/trainerRoutes');
const bookingRoutes=require('./routes/bookingRoutes');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Express.json()
app.use(express.json());

app.use('/api/users',authRoutes)
app.use('/api/trainer',trainerRoutes)
app.use('/api/batch',batchRoutes)
app.use('/api/booking',bookingRoutes)


const PORT=process.env.PORT || 5000;
app.listen(PORT,console.log(`Server started on port ${PORT} `));
