<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>  
        <home-icons></home-icons>
        <home-recomment></home-recomment>    
        <home-weekend></home-weekend>                                                  
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecomment from './components/Recomment'
import HomeWeekend from './components/Weekend'


export default {
    name:'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecomment,
        HomeWeekend
    }
}
</script>
<style>


</style>
