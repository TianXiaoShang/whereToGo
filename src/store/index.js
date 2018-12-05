import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations'
Vue.use(Vuex)



export default new Vuex.Store({         //导出vuex创建的Store仓库
    state,
    mutations,

    actions:{
        changeCity(ctx, city){               //记得这里有个上下文ctx，同时在ctx上使用commit方法
            ctx.commit('changeCity', city)   //ctx帮助我们拿到commit方法，使用commit方法驱动mutations
        }
    },
    getters: {                               //类似于vue中的computed计算属性，常用语根据state中的值计算出新的值，防止数据的冗余，在实例中的使用方法与state相同。
        doubleCity (state) {                 //同样先接收state对象
            return state.city + ' ' + state.city
        }
    }


    // state:{
    //     // city: localStorage.city || '上海';      //使用localStorage
    //     city: defaultCity                         //为了防止某些浏览器不支持或用户设置隐私无痕浏览模式报错，在上方使用加入try catch
    // },
    // mutations:{
    //     changeCity(state, city){            //这里第一个直接接收state，修改state的值即可
    //        state.city = city;               //这里帮助我们拿到state数据池，进行修改
    //        try{
    //            localStorage.city = city
    //        } catch (e){}
    //     }
    // }
})