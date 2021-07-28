const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const basicRoutes = require('./Routes/Basic');

const db = mongoose.connection;
mongoose.connect(`mongodb+srv://Ishaan:${process.env.DATABASE_KEY}@fintech-app.mg3bi.mongodb.net/test`, {useNewUrlParser: true, useUnifiedTopology: true});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database Connected")
});

app.use('/',basicRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT,(req,res)=>{
    console.log(`Listening on port ${PORT}`);
})