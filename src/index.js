import { createStore, applyMiddleware,compose,combineReducers  } from 'redux';
import thunk from 'redux-thunk';

import React,{Component} from 'react';
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Link ,Switch} from "react-router-dom";
import reducer from "./reducer";
import './config';
import Login from './container/login/login';
import Register from './container/register/Register';
import AuthRoute from './component/authRoute/AuthRoute';
import './index.css';
import BossInfo from './container/bossinfo/BossInfo';



let store;
if(!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)){
    store = createStore(
        reducer,
        applyMiddleware(thunk)
    );
}else{
    store = createStore(
        reducer,
        compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
    );
}

function Boss(){
    return (
        <div>
           <h1>boss测试</h1>
        </div>
    )
}

ReactDom.render(
    <Provider store={store}>

        <Router>
            <div>
                {/*此处的div包含AuthRoute和路由，如果没有div会报错*/}
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path="/boss" exact component={Boss} />
                    <Route path="/boss/info" component={BossInfo} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)





