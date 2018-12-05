<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList='swiperList'></home-swiper>  
        <home-icons :iconList="iconList"></home-icons>
        <home-recomment :recommendList="recommendList"></home-recomment>    
        <home-weekend :weekendList="weekendList"></home-weekend>                                                  
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecomment from './components/Recomment'
import HomeWeekend from './components/Weekend'
import axios from 'axios'          //使用axios请求模块
import { mapState } from 'vuex'    //引入vuex模块使用state数据池中数据

export default {
    name:'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecomment,
        HomeWeekend
    },
    data(){
        return{
            lastCiay: '',
            swiperList:[],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    computed:{
        ...mapState(['city'])
    },
    mounted(){
        this.lastCiyt = this.city        //首次进入页面，保存city值，用于在activated每次更新页面的city值是否相同而决定是否请求新的数据        
        this.getHomeInfo()
    },
    methods: {
        getHomeInfo(){
            axios.get('/api/index.json?city=' + this.city)
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            var res = res.data;
            if(res.data){
                var data = res.data;
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;
            }
        }
    },
    activated(){            //使用keep-alive标签时候，会多一个生命周期函数，也就是activated,它当页面重新被显示的时候自动执行
        console.log('activated')
        if(this.lastCiay !== this.city) {
            this.lastCiay = this.city
            this.getHomeInfo()
        }
    }
}
</script>
<style>


</style>
