import Vue from 'vue';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import { Loading, Message } from 'element-ui';
import axios from 'axios';
let isPattern = process.env.NODE_ENV;
let loadingInstance = null;
let publicUrl = isPattern == 'development' ? 'http://localhost:3001/' : 'http://www.caicailv.cn/';
axios.defaults.timeout = 5000;
axios.defaults.baseURL = publicUrl;
axios.interceptors.request.use(config => {
    // 响应之前
    loadingInstance = Loading.service();
    config.headers['token'] = 23;
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