<template>
    <div>
        <home-header :city='city'></home-header>
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
import axios from 'axios'

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
            city:'',
            swiperList:[],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    mounted(){
        console.log('a')
        this.getHomeInfo()
    },
    methods: {
        getHomeInfo(){
            axios.get('/api/index.json')
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            var res = res.data;
            if(res.data){
                var data = res.data;
                this.city = data.city;
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;
                console.log(this.iconList)
            }
        }
    }
}
</script>
<style>


</style>
