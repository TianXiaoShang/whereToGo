import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({         //导出vuex创建的Store仓库
    state:{
        city: '上海'
    },
    actions:{
        changeCity(ctx, city){               //记得这里有个上下文ctx，同时在ctx上使用commit方法
            ctx.commit('changeCity', city)   //ctx帮助我们拿到commit方法，使用commit方法驱动mutations
        }
    },
    mutations:{
        changeCity(state, city){            //这里第一个直接接收state，修改state的值即可
           state.city = city;               //这里帮助我们拿到state数据池，进行修改
        }
    }
})