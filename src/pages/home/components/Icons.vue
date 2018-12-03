<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key='index'>
                <div class="icon"
                    v-for="item of page" 
                    :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>  
            </swiper-slide>            
        </swiper>      
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    data(){
        return {
            swiperOption: {}
        }
    },
    props:{
        iconList: Array
    },
    computed:{
        pages(){
            const pages = [];
            this.iconList.forEach(function (item, index){
                const page = Math.floor( index / 8);   //计算每一个当前元素是否超过第八个，超过则创建第二个轮播页面；
                if(!pages[page]){
                    pages[page] = [];
                }
                pages[page].push(item);
            })
            return pages;
        }
    }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/variables.styl'
    @import '~styles/mixins.styl' 
    .icons >>> .swiper-container         //解决未撑开的高度无法滑动
        height: 0
        padding-bottom: 50%
    .icons
        margin-top: .2rem    
        .icon
            position: relative
            overflow: hidden
            float: left
            width: 25%
            height: 0
            padding-bottom: 25%
            .icon-img
                position: absolute 
                left: 0
                top: 0
                right: 0
                bottom: 23%
                box-sizing: border-box   /*  这玩意干嘛用   */
                padding: .1rem
                .icon-img-content
                    display: block
                    height: 100%
                    margin: 0 auto
            .icon-desc
                position: absolute 
                left: 0
                bottom: 0
                right: 0
                height: 23%
                line-height: 123%
                color: @drakTextClolr
                text-align: center
                ellipsis()                //省略号
</style>
