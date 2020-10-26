const express = require('express')
const path = require('path')

const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use('/user',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','user.html'))
})

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','home.html'))
})

app.use('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000);