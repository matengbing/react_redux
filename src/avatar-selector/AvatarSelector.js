import React,{Component} from 'react';
import { ImagePicker, WingBlank, SegmentedControl,InputItem,Grid,Button,List } from 'antd-mobile';

export default class AvatarSelector extends Component{
    constructor(props){
        super(props);

        this.state={
           icon:'',
            text:''
        }
    }

    render(){
        const avatarList='boy,icon2,girl'.split(',').map((v)=>{
           return (
               { icon:require(`../img/${v}.png`),
                   text:v
               }

           )
        })

        const gridHeader= this.state.icon?(<div>
                <span>
                    已选择头像
                </span>
                <img style={{width:20}} src={this.state.icon} alt="头像"></img>
            </div>):
            <div>"请选择头像"</div>
        return (
            <div>

                <List>
                    {gridHeader}
                    <Grid
                        columnNum={3}
                        data={avatarList}
                        onClick={(elm)=>{
                            this.setState({
                                icon:elm.icon,
                                text:elm.text
                            })
                            this.props.avatarSelector(elm.text)
                        }}
                    />

                </List>


            </div>
        )
    }

}