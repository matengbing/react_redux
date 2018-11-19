import React, { Component } from 'react';
import {connect} from 'react-redux';
import {add,reduce,addAsync} from './index.redux';



// @connect(mapStatesToProps,actionCreators)
class App extends Component {
  render(){
      const num=this.props.num;
      const add=this.props.add;
      const reduce=this.props.reduce;
      const addAsync=this.props.addAsync;


    return (
        <div>
         <h1>现在的数字为{num}</h1>
            <button onClick={add}>增加数字</button>
            <button onClick={reduce}>减少数字</button>
            <button onClick={addAsync}>异步增加数字</button>
        </div>
    )
  }



}




const mapStatesToProps=(state)=>{
    return {num:state.count}
}
const actionCreators={add,reduce,addAsync}

App=connect(mapStatesToProps,actionCreators)(App)
export default App;


