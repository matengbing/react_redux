import React,{Component} from 'react';
import {connect} from 'react-redux';
import {login,getUserData} from "./Author.redux";
import Dashborad from "./Dashborad";
import { BrowserRouter as Router, Route, Link ,Switch,Redirect} from "react-router-dom";
import {add, addAsync, reduce} from "../index.redux";
import axios from 'axios';


export default class Auth extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
    }

    componentDidMount(){
        this.props.getUserData()
    }

    render(){
        const isAuth=this.props.auth.isAuth
        console.log(isAuth)
        return (
            <div>
                姓名：{this.props.auth.user} 年龄：{this.props.auth.age}
                {isAuth ? <Redirect to='/dashboard' />:null}
                <p>您没有权限，需要登录</p>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}



const mapStatesToProps=(state)=>{
    return {auth:state.auth}
}
const actionCreators={login,getUserData}
Auth=connect(mapStatesToProps,actionCreators)(Auth)