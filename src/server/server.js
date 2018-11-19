const express =require('express')
const userRouter=require('./User')
const bodyParser=require('body-parser')
const cookieparser=require('cookie-parser')

//创建app
const app=express()
app.use(cookieparser())
app.use(bodyParser.json())
app.use('/user',userRouter)

app.listen(9093,function () {
    console.log("node app start at port 9093")
})