const mongoose=require('mongoose')
//连接MongoDB
const DB_URL='mongodb://localhost:27017/imooc-chat'
mongoose.connect(DB_URL)

const models={
    user:{
        'user':{type:String,require:true},
        'pwd':{type:String,require:true},
        'type':{type:String,require:true},
        'avatar':{type:String},
        //个人简介
        'desc':{type:String},
        //职位
        'title':{type:String},

        //如果是boss还要多两个字段
        'company':{type:String},
        'money':{type:String}
    },
    chat:{

    }
}


for(let m in models){
    mongoose.model(m,mongoose.Schema(models[m]))
}

module.exports={
    getModel:function (name) {
        return mongoose.model(name)
    }
}