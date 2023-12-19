// Import 
const express = require('express')
const path=require('path');
const dotenv=require('dotenv');
const app = express();
const authRoutes=require('./routes/userRoutes');
const batchRoutes=require('./routes/batchRoutes');
const trainerRoutes=require('./routes/trainerRoutes');
const bookingRoutes=require('./routes/bookingRoutes');
const paymentRoutes=require('./routes/paymentRoutes');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Express.json()
app.use(express.json());

app.use('/api/users',authRoutes)
app.use('/api/trainer',trainerRoutes)
app.use('/api/batch',batchRoutes)
app.use('/api/booking',bookingRoutes)
app.use('/api/payment',paymentRoutes)

// ---------production ------------------
if (process.env.NODE_ENV === 'production') {
    const __dirname1 = path.resolve();
    
    app.use(express.static(path.join(__dirname1, "frontend/dist")));
  
    app.get("*", (req, res) =>{
      res.sendFile(path.resolve(__dirname1, "frontend", "dist", "index.html"))

    });
  } else {
    app.get("/", (req, res) => {
      res.send("API is running.");
    });
  }
// --------------
const PORT=process.env.PORT || 5000;
app.listen(PORT,console.log(`Server started on port ${PORT} `));
