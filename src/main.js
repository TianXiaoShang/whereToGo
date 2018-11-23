// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'    //解决移动端部分click事件延迟300毫秒执行的库  npm install fastclick --save  save代表不管开发或者上线均使用这个库
import './assets/styles/reset.css'   //解决移动端样式不统一的问题；
import './assets/styles/border.css'  //解决移动端部分高分辨率手机border显示问题


Vue.config.productionTip = false    //关闭生产环境
fastClick.attach(document.body)     //fastClick的使用方式，绑定到document.body上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>' 
})
