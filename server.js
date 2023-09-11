const dotenv=require('dotenv');
const cors = require('cors');
const mongoose=require('mongoose')
dotenv.config({path:'./config.env'});
const express =require('express')
let app=express()
const data=require('./Models/dataModel')


console.log(process.env);
app.use(cors());

mongoose.connect(process.env.CONN_STR,{
    useNewUrlParser:true
}).then((conn)=>{
    console.log(conn);
    console.log('DB connection successful!!')
}).catch((err)=>{
    console.log('some err has occur..')
})




app.get('/api/datas',async(req,res)=>{
    const datas=await data.find()
    res.status(200).json({
        status:'sucess',
        data:{
            datas:datas
        }
    })
    
})

const port=process.env.PORT || 3000;



app.listen(port,()=>{
    console.log('server has started..')
})
