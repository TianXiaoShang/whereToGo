// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'    //解决移动端部分click事件延迟300毫秒执行的库  npm install fastclick --save  save代表不管开发或者上线均使用这个库
import store from './store'          //引入vuex的store
import 'styles/reset.css'            //解决移动端样式不统一的问题；
import 'styles/border.css'           //解决移动端部分高分辨率手机border显示问题
import 'styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'    //引入轮播图插件模块
import 'swiper/dist/css/swiper.css'                  //引入轮播图插件css模块

Vue.config.productionTip = false     //关闭生产环境
fastClick.attach(document.body)      //fastClick的使用方式，绑定到document.body上
Vue.use(VueAwesomeSwiper, /* { default global options } */)    //使用轮播图插件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, 
  store,
  components: { App },
  template: '<App/>' 
})
