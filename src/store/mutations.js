export default {
    changeCity(state, city){            //这里第一个直接接收state，修改state的值即可
        state.city = city;               //这里帮助我们拿到state数据池，进行修改
        try{
            localStorage.city = city
        } catch (e){}
     }
 
}