import React,{Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

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
                   console.log(res.data.code)
               }else {
                   console.log(res.data)
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


export default withRouter(AuthRoute);