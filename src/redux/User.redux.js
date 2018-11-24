import axios from 'axios';
import {getRedirectPath} from '../utils/util';


const REGISER_SUCCESS="REGISER_SUCCESS";
const LOGIN_SUCCESS="LOGIN_SUCCESS";
const REGISTER_FAIL="REGISTER_FAIL";
const ERROR_MESSAGE="ERROR_MESSAGE";
const LOAD_DATA="LOAD_DATA";
const AUTH_SUCCESS="AUTH_SUCCESS";

const initState={
    redirectTo:'',
    user:'',
    pwd:'',
    repeatpwd:'',
    type:'',
    msg:''
}

function errorMsg(messgae) {
    return {type:ERROR_MESSAGE,payload:messgae}
}

function registeSsuccess(data) {
    return {type:REGISER_SUCCESS,payload:data}
}

function loginSuccess(data) {
    return {type:LOGIN_SUCCESS,payload:data}
}

function authSuccess(data) {
    return {type:AUTH_SUCCESS,payload:data}
}



function userinfo() {
       //获取用户信息
       axios.get('/user/info').then((res)=>{
           if(res.status==200){
               if(res.data.code==1){
                   //有登录信息
                   console.log(res.data.code)
                   this.props.loadData(res.data.data);
               }else {
                   this.props.history.push('/login')
               }

           }
       })


}

export function loadData(userinfo) {
    return {type:LOAD_DATA,payload:userinfo}
}


export function update(data) {
    return dispatch=>{
        axios.post('/user/update',data).then(res=>{
            if (res.status == 200 && res.data.code == 1) {
                dispatch(authSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}


export function user(state=initState,action) {
    switch (action.type){
        case AUTH_SUCCESS:
            return {...state,msg:'',redirectTo:getRedirectPath(action.payload),...action.payload}
        case ERROR_MESSAGE:
            return {...state,isAuth:false,msg:action.payload}
        case LOAD_DATA:
            return {...state,...action.payload}
        default:
            return state
    }

}

export function login({user,pwd}) {

    if(!user||!pwd){
        return errorMsg("缺少参数");
    }

    return dispatch=> {
        axios.post('/user/login', {user, pwd}).then((res) => {
            if (res.status == 200 && res.data.code == 1) {
                dispatch(authSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}



export function register({user,pwd,repeatpwd,type}) {
    if(!user||!pwd||!repeatpwd||!type){
        return errorMsg("缺少参数");
    }
    if(pwd!=repeatpwd){
        return errorMsg("密码和确认密码不同");
    }
    return dispatch=> {
        axios.post('/user/register', {user, pwd, type}).then((res) => {
            if (res.status == 200 && res.data.code == 1) {
                dispatch(authSuccess({user, pwd, type}))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}