import axios from 'axios';
const LOGIN='LOGIN'
const LOGOUT='LOGOUT'
const USERDATE='USERDATA'
const initStates={
    isAuth:false,
    user:'李雨浓',
    age:21
}
export function auth(state=initStates,action) {
    switch (action.type){
        case LOGIN:
            return {...state,isAuth:true}

        case LOGOUT:
            return{...state,isAuth:false}
        case USERDATE:
            return {...state,...action.payload}
        default:
            return {...state}
    }
}


export function getUserData() {
    //dispatch用来通知
    return dispatch=>{
        axios.get('/data').then(res=>{
            if(res.status==200){
                dispatch(UserData(res.data))
            }
        })
    }
}

export function UserData(data) {
    return {type:USERDATE,payload:data}
}


export function login() {
    return {type:LOGIN}
}
export function logout() {
    return {type:LOGIN}
}
