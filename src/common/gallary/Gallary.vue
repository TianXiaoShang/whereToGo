<template>
    <div class="container" @click="handleBannerClick">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item, index) of imgs" :key='index'>
                    <img class="gallar-img" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>

export default {
    name: "CommonGallary",
    data(){
        return {
            swiperOptions:{
                    pagination: ".swiper-pagination",
                    paginationType: 'fraction',
                    observeParents: true,    //监听父级元素变化则刷新一次，防止样式等bug
                    observer: true           //监听当前元素变化则刷新一次，防止样式等bug
            }
        }
    },
    methods:{
        handleBannerClick(){
            this.$emit('close')
        }
    },
    props:{
        imgs: Array
    }
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container
        z-index: 99
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        background: black 
        display: flex
        flex-direction: column
        justify-content: center
        .wrapper
            height: 0
            width:100%
            padding-bottom:100%
            .gallar-img
                width:100%
            .swiper-pagination
                color: white
                bottom: -1rem
</style>
