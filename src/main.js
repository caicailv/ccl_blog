// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css';
import router from './router';
import Axios from 'axios';
//axios配置 
let isPattern = process.env.NODE_ENV;
if (isPattern=='development') {
  Axios.defaults.baseURL = 'http://localhost:3001/';
} else {
  Axios.defaults.baseURL = 'http://www.caicailv.cn/';
}
Vue.prototype.$axios = Axios;

// 公用组件
import Header from '@/components/partials/header'
Vue.component('Header',Header);
import Footer from '@/components/partials/footer'
Vue.component('Footer',Footer);
import Right from '@/components/partials/right'
Vue.component('Right',Right);
// 复用组件
import List from '@/components/common/list'
Vue.component('List',List);


Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
