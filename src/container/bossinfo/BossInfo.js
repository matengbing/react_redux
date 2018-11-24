import React,{Component} from 'react';
import { NavBar, Icon,InputItem,WhiteSpace,TextareaItem,Button  } from 'antd-mobile';
import AvatarSelector from '../../avatar-selector/AvatarSelector';
import {register, update} from '../../redux/User.redux';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

class BossInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            'title':'',
            avatar:'',
            avatarText:''
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(key,value){
        this.setState({
            [key]:value
        })
    }

    onSubmit(){
        this.props.update(this.state);
    }

    avatarSelector(imgname){
        this.setState({
            avatar:imgname,

        })
    }
    render(){
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="<"
                >
                    Boss
                </NavBar>

                {this.props.redirectTo? <Redirect to={this.props.redirectTo}/>:null}
                <AvatarSelector
                    avatarSelector={this.avatarSelector.bind(this)}
                >
                </AvatarSelector>

                <WhiteSpace />
                <InputItem onChange={(v)=>{this.onChange('title',v)}}>
                    招聘职位
                </InputItem>
                <WhiteSpace />
                <InputItem onChange={(v)=>{this.onChange('company',v)}}>
                    公司名称
                </InputItem>
                <WhiteSpace />
                <InputItem onChange={(v)=>{this.onChange('money',v)}}>
                    职位薪资
                </InputItem>
                <WhiteSpace />
                < TextareaItem
                    title="职位要求"
                    placeholder="职位要求"
                    autoHeight
                    rows={5}
                    count={100}
                    onChange={(v)=>{this.onChange('desc',v)}}>

                </ TextareaItem >

            <Button type="primary" onClick={this.onSubmit}>保存</Button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {user:state.user}
}
const actionCreators={update}
BossInfo=connect(mapStateToProps,actionCreators)(BossInfo)

export default BossInfo;