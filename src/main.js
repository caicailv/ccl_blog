// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css';
import router from './router';
import '@/assets/js/axios.config';
//axios配置 

// 公用组件
Vue.component('Header', () => import("@/components/partials/header"));
Vue.component('Footer', () => import('@/components/partials/footer'));
Vue.component('Right', () => import('@/components/partials/right'));
// 复用组件 
Vue.component('List',()=> import('@/components/common/list'));//博客列表
Vue.component('no-data',()=> import('@/components/common/nodata'));//没有数据展示
Vue.component('add-blog',()=> import('@/components/common/addBlog'));//新增或编辑内容
Vue.component('login',()=> import('@/components/common/login'));//登录


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
