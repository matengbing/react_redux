import React,{Component} from 'react';
import Logo from '../../component/logo/Logo';
import { List, InputItem,WingBlank,WhiteSpace,Button,Radio} from 'antd-mobile';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getUserData, login} from "../../author/Author.redux";
import {register} from '../../redux/User.redux';

const RadioItem = Radio.RadioItem;
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genuis',  //类型
            msg:''
        }
        this.handleRegister=this.handleRegister.bind(this);
    }

    // register(){
    //     //     this.props.history.push('/register')
    //     // }

    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }


    handleRegister(){
        this.props.register(this.state)
        console.log(this.state)
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
                        placeholder="用户名">
                        用户名
                    </InputItem>
                    <WhiteSpace/>
                    <InputItem
                        type="password"
                        onChange={(v)=>this.handleChange('pwd',v)}
                        placeholder="密码">
                        密码
                    </InputItem>
                    <WhiteSpace/>
                    <InputItem
                        type="password"
                        onChange={(v)=>this.handleChange('repeatpwd',v)}
                        placeholder="确认密码">
                        确认密码
                    </InputItem>
                    <WhiteSpace/>

                    <RadioItem
                        checked={this.state.type=='boss'}
                        onClick={()=>this.handleChange('type','boss')}
                        >
                        boss
                    </RadioItem>
                    <WhiteSpace/>
                    <RadioItem

                        checked={this.state.type=='genuis'}
                        onClick={()=>this.handleChange('type','genuis')}
                        >
                        牛人
                    </RadioItem>
                    {/*<WhiteSpace/>*/}
                    {/*<Button type="primary">登录</Button>*/}
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

const actionCreators={register}

Register=connect(mapStateToProps,actionCreators)(Register)
export default Register;