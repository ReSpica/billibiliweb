import axios from 'axios';
import QS from 'qs';
//用于响应拦截中使用跳转router
import router from '../router/index.js'
//用于响应拦截/请求拦截中使用轻提示
import vue from 'vue'


//环境改变变化请求的url
if (process.env.NODE_ENV == 'development') {
	axios.defaults.baseURL = 'http://112.74.99.5:3000/web/api';
} else if (process.env.NODE_ENV == 'debug') {
	axios.defaults.baseURL = 'http://112.74.99.5:3000/web/api';
} else if (process.env.NODE_ENV == 'production') {
	axios.defaults.baseURL = 'http://112.74.99.5:3000/web/api';
}

//设置过期时间
axios.defaults.timeout = 10000;
//设置post
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//请求拦截
axios.interceptors.request.use(
	config => {
		//拦截除了登录和注册请求，放个token上去
		if(config.url == 'login' || config.url == 'register'){
			return config;
		}else{
			vue.prototype.$tip.loading()
			config.headers.Authorization  = localStorage.getItem('token')
			return config;
		}
	},
	error => {
		return Promise.error(error);
	})

// 响应拦截器
axios.interceptors.response.use(
	response => {
		vue.prototype.$tip.clear()
		if (response.status === 200) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(response);
		}
	},
	// 服务器状态码不是2开头的的情况
	// 这里可以跟你们的后台开发人员协商好统一的错误状态码    
	// 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
	// 下面列举几个常见的操作，其他需求可自行扩展
	error => {
		vue.prototype.$tip.clear()
		return Promise.reject(error.response);
	}
);



/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: params
		}).then(res => {
			resolve(res.data);
		}).catch(err => {
			reject(err.data)
		})
	});
}



/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
	return new Promise((resolve, reject) => {
		axios.post(url, QS.stringify(params))
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err)
			})
	});
}



export function upload(url, params) {
	return new Promise((resolve, reject) => {
		axios.post(url, params)
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err)
			})
	});
}



export function get1(url, e,params) {
	return new Promise((resolve, reject) => {
		axios.get(url+e, {
			params: params
		}).then(res => {
			resolve(res.data);
		}).catch(err => {
			reject(err.data)
		})
	});
}