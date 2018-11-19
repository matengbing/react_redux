const express =require('express')
const Router=express.Router()
const model=require('./Model')
const User=model.getModel('user')
const utility = require('utility');

Router.get('/list',function (req,res) {
    User.find({},function (err,doc) {
        return res.json(doc)
    })
})

Router.post('/login',function (req,res) {
    const {user,pwd}=req.body;
    User.findOne({user:user,pwd:pwd},function (err,doc) {
        if(!doc){
            return res.json({code:0,msg:"用户名密码不匹配"})
        }
        res.cookie('userid',doc._id)
        return res.json({code:1,data:doc})
    })
})



Router.post('/register',function (req,res) {
    const {user,pwd,type}=req.body;
    console.log(MD5PASSWORD(pwd));
    User.findOne({user:user},function (err,doc) {
        if(doc){
            return res.json({code:0,msg:"用户名重复"})
        }
        User.create({user:user,type:type,pwd:MD5PASSWORD(pwd)},function (e,d) {
            if(e){
                return res.json({code:0,mwg:"后端插入数据时出错"})
            }else {

                return res.json({code:1,msg:""})
            }
        })
    })
})

Router.get('/info',function (req,res) {
    return res.json({code:1})
})

function MD5PASSWORD(password) {
    const salt = 'more_complex_passWord187873871~@!@@@##$$%%DAxiao';
    return utility.md5( utility.md5(password + salt) );
}


module.exports=Router

