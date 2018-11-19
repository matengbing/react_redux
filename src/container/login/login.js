import React,{Component} from 'react';
import Logo from '../../component/logo/Logo';
import { List, InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile';
import {login, register} from '../../redux/User.redux';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            user:'',
            pwd:'',

        }
        this.handleRegister=this.handleRegister.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }

    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }

    handleLogin(){
        console.log(this.state)
        this.props.login(this.state);
    }

    handleRegister(){
        console.log(this.props)
        this.props.history.push('/register')
    }

    render(){
        return (
            <div>
                {this.props.user.redirectTo ? <Redirect to={this.props.user.redirectTo} /> :null}
                <Logo/>
                {this.props.user.msg?<p className="err_msg">{this.props.user.msg}</p>:null}
                <WingBlank>
                    <InputItem
                        onChange={(v)=>this.handleChange('user',v)}
                        placeholder="usename"
                    >
                        用户名
                    </InputItem>
                    <WhiteSpace/>
                    <InputItem
                        type="password"
                        onChange={(v)=>this.handleChange('pwd',v)}
                        placeholder="password"
                    >
                        密码
                    </InputItem>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleLogin}>登录</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={this.handleRegister} >注册</Button>
                </WingBlank>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {user:state.user}
}

const actionCreators={login}

Login=connect(mapStateToProps,actionCreators)(Login)

export default Login;