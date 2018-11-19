import React,{Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {loadData, register} from '../../redux/User.redux';
import {connect} from 'react-redux';

class AuthRoute extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        const publicList=['/login','register'];
        const pathname=this.props.location.pathname;
        if(pathname in publicList){
            return null;
        }
        //获取用户信息
        axios.get('/user/info').then((res)=>{
           if(res.status==200){
               if(res.data.code==1){
                   //有登录信息
                   this.props.loadData(res.data.data)
                   console.log(res.data.data)
               }else {
                   console.log(this.props)
                   this.props.history.push('/login')
               }

           }
        })
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}


AuthRoute= withRouter(AuthRoute);
const actionCreators={loadData}
AuthRoute=connect(null,actionCreators)(AuthRoute)
export default AuthRoute;