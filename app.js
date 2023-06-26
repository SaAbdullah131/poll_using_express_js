const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose');
const port = process.env.PORT || 4545;
// require('dotenv').config();

const app = express();

app.set('view engine','ejs');
// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/',(req,res)=>{
   res.render('hello')
})
app.get('/create',(req,res)=>{
    
})
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true})

app.listen(port ,()=>{
    console.log(`Application on Running on port 4545`);
})

