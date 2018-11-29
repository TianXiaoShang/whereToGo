<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>  
        <home-icons></home-icons>
        <home-recomment></home-recomment>                       
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecomment from './components/Recomment'

export default {
    name:'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecomment
    }
}
</script>
<style>


</style>
