const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();

const app=express();
app.use(cors()); // FIX
app.use(express.json()); // FIX

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));  
app.use('/api/expenses', require('./routes/expenser')); 



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));