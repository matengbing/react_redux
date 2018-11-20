启动mongodb：
	在服务中打开mongodb的服务
	进入mongodb所在目录的bin目录：
		mongo命令启动

启动react连接mongodb：
进入server目录
	node server.js启动




react调试工具：
	谷歌浏览器安装：react-devtools


redux：
安装
	npm install redux --save



处理异步：
	npm install redux-thunk --save


	applyMiddleware处理中间件

	参考：https://github.com/reduxjs/redux-thunk

	import { createStore, applyMiddleware } from 'redux';
	import thunk from 'redux-thunk';
	const store=createStore(count,applyMiddleware(thunk))



redux调试工具：
	谷歌浏览器安装：redux-devtools-extension

	参考：https://blog.csdn.net/applebomb/article/details/54918659



使用react-redux：
	npm install react-redux  --save

	使用react-redux时

		provider






自定义配置：
	弹出配置
		npm run eject命令，目录会多出几个文件




react路由：
	 <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about/" component={About} />
                    <Route path="/users/" component={Users} />
                </Switch>

            </div>
        </Router>

	注意：Switch，exact等





网络请求插件：
	axios

	安装：
		npm install axios  --save

	在package.json中配置proxy
		 "proxy":"http://localhost:9093"
	解决跨域问题




拦截axios请求与响应
	安装最新的antd-mobile
	npm install antd-mobile@next --save-dev


	在index.js中引入配置
	import './config';

	config.js
		import axios from 'axios';

		import {Toast} from 'antd-mobile';

		//拦截器拦截请求
		axios.interceptors.request.use(function (config) {
			Toast.loading("加载中...",0)
			return config;
		})


		//拦截器拦截相应
		axios.interceptors.response.use(function (config) {
		   setTimeout(()=>{
			   Toast.hide()
		   },2000)
			return config;
		})


登录注册模块：
	基于cookie的验证，安装组件：
	express依赖cookie-parser
		npm install cookie-parser  --save









	后台安装body-parser 接收参数
		npm install body-parser  --save




	对密码进行加密：
		安装utility
			npm install utility  --save





