const express =require('express')
const Router=express.Router()
const model=require('./Model')
const User=model.getModel('user')
const utility = require('utility');
const filter={'pwd':0,'_v':0}

Router.get('/list',function (req,res) {
    User.find({},function (err,doc) {
        return res.json(doc)
    })
})

Router.post('/update',function (req,res) {
    const userid=req.cookies;
    console.log(res.cookies)
    console.log(userid)
    if(!userid){
        return res.json({code:0})
    }
    const body =req.body;
    User.findByIdAndUpdate(userid,body,function (err,doc) {
        if(err){
            return res.json({code:0})
        }


        const data={...body,user:doc.user,type:doc.type}
        return res.json({code:1,data:data})
    })

})


Router.post('/login',function (req,res) {
    const {user,pwd}=req.body;
    User.findOne({user:user,pwd:MD5PASSWORD(pwd)},function (err,doc) {
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

        const userModel=new User({user:user,type:type,pwd:MD5PASSWORD(pwd)});
        userModel.save(function (e,d) {
            if(e){
                return res.json({code:0,mwg:"后端插入数据时出错"})
            }else {
                console.log("/user/register"+d);
                const {user,type,_id}=d;
                res.cookie('userid',_id)
                return res.json({code:1})
            }
        })

        // User.create({user:user,type:type,pwd:MD5PASSWORD(pwd)},function (e,d) {
        //     if(e){
        //         return res.json({code:0,mwg:"后端插入数据时出错"})
        //     }else {
        //
        //         return res.json({code:1,msg:""})
        //     }
        // })
    })
})

Router.get('/info',function (req,res) {
    const userid=req.cookies;
    console.log(userid)
    if(!userid){
        return {code:0}
    }
    // User.findOne({_id:userid},filter,function (err,doc) {
    //     if(err){
    //         return {code:0,msg:"后端出错"}
    //     }
    //     if(doc){
    //         return {code:1,data:doc}
    //     }
    // })

    User.findOne({},filter,function (err,doc) {
        if(err){
            return {code:0}
        }else {
            return res.json({code:1,data:doc})
        }

    })
    // return res.json({code:1})
})

function MD5PASSWORD(password) {
    const salt = 'more_complex_passWord187873871~@!@@@##$$%%DAxiao';
    return utility.md5( utility.md5(password + salt) );
}


module.exports=Router

