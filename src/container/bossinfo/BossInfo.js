import React,{Component} from 'react';
import { NavBar, Icon,InputItem,WhiteSpace,TextareaItem,Button  } from 'antd-mobile';
import AvatarSelector from '../../avatar-selector/AvatarSelector';


class BossInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            'title':'',
            avatar:'',
            avatarText:''
        }
        this.onChange=this.onChange.bind(this);
    }

    onChange(key,value){
        this.setState({
            [key]:value
        })
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

            <Button type="primary">保存</Button>
            </div>
        )
    }
}


export default BossInfo;