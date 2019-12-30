// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
//引入fastClick 插件 解决移动端点击300ms 延迟问题
import fastClick from 'fastclick'
// 引入swiper 的css
import 'swiper/dist/css/swiper.css'
//引用轮播插件 VueAwesomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
//使用VueAwesomeSwiper 的插件
Vue.use(VueAwesomeSwiper);
fastClick.attach(document.body);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
