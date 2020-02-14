import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import { Loading, Message } from 'element-ui';
import axios from 'axios';
let isPattern = process.env.NODE_ENV;
let loadingInstance = null;
let publicUrl = isPattern == 'development' ? 'http://localhost:3001/' : 'http://www.caicailv.cn:3001/';
//  let publicUrl = isPattern = 'http://www.caicailv.cn:3001/'; 
axios.defaults.timeout = 60000;
axios.defaults.baseURL = publicUrl;
axios.interceptors.request.use(config => {
    // 响应之前
    let token = localStorage.getItem("token");
    loadingInstance = Loading.service();
    config.headers['token'] = token;
    return config
}, error => {
    // 错误响应
    return Promise.reject(error)
});
axios.interceptors.response.use(res => {
    loadingInstance.close();
    return res.data
}, err => {
    loadingInstance.close();
    console.log(err);
    Message.error('系统出错,请重试');
})
Vue.prototype.$axios = axios; 
Vue.prototype.$url = publicUrl;