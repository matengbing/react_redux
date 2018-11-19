import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link ,Switch,Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {login} from "./Author.redux";

export default class Dashborad extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const match=this.props.match;

        return (
            <div>
                <div>
                    {/*{this.props.auth.isAuth ? <Redirect to='/login' />:null}*/}
                    <ul>
                        <li>
                            <Link to="/">login</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">dashboard</Link>
                        </li>
                        <li>
                            <Link to="/login">login</Link>
                        </li>
                        <li>
                            <Link to="/app">app</Link>
                        </li>
                    </ul>

                </div>
            </div>
        )


    }
}



const mapStatesToProps=(state)=>{
    return {auth:state.auth}
}
const actionCreators={login}
Dashborad=connect(mapStatesToProps,actionCreators)(Dashborad)