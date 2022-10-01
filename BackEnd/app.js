const express=require('express');
const mysql=require('mysql');
const db=require("./config/db.config")


const user=require('./routes/user');
const vehicle=require('./routes/vehicle');

const app=express();
const port=4000;
app.use(express.json())

app.use('/user',user);
app.use('/vehicle',vehicle);

app.listen(port,()=>{
    console.log(`app listing on port : ${port}`);
})
