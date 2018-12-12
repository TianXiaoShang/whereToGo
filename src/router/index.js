import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home.vue')   //异步组件的加载形式
    },{
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City.vue')
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }],
    scrollBehavior(to, from, savedPosition){
      return {x: 0, y: 0}
    }
})



//-----------------------以上异步写法（按需加载各个页面的js代码）-------------------

// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from '@/pages/home/Home.vue'
// import City from '@/pages/city/City.vue'
// import Detail from '@/pages/detail/Detail'


  
// Vue.use(Router)

// export default new Router({
//   routes: [{
//       path: '/',
//       name: 'Home',
//       component: Home
//     },{
//       path: '/city',
//       name: 'City',
//       component: City
//     },{
//       path: '/detail/:id',
//       name: 'Detail',
//       component: Detail
//     }],
//     scrollBehavior(to, from, savedPosition){
//       return {x: 0, y: 0}
//     }
// })
