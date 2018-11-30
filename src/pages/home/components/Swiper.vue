<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of swiperList" :key='item.id'>
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
  </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data(){
        return {
            swiperOption: {
                pagination:'.swiper-pagination',      //表示使用小圆点
                loop: true,                           //表示可以循环展示
                autoplay: 1500,
            }
        } 
    },
    props:{
        swiperList: Array
    },
    computed:{
        showSwiper(){
            return this.swiperList.length
        }
    }
}
</script>

<style lang='stylus' scoped> 
    .wrapper >>> .swiper-pagination-bullet-active    //使用>>>符号从父级将属性穿透scoped的限制，作用于子组件上；
        background :#fff !important
    .wrapper >>> .swiper-wrapper
        transform: translate3d(-1500px, 0px, 0px)
        // transition-duration: 1000ms !important
    .wrapper                            //网速过慢未加载图片时先撑开当前区域，同时巧用padding-bottom保持宽高比
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 31.25%
        background: #eee        
        .swiper-img
            width: 100%
</style>
