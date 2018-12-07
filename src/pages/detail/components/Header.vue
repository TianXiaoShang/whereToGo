<template>
<div>
    <router-link tag="div" to="/" class=header-abs v-show="showAbs">
        <div class="iconfont header-abs-icon">&#xe624;</div>   
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacity">
            <router-link to="/">
            <div class="iconfont header-fixed-back">&#xe624;</div>    
            </router-link>
            景点详情
        </div>
</div>
    
</template>

<script>
export default {
    name: 'DetailHeader',
    data(){
        return{
            showAbs: true,
            opacity:{
                opacity: 0
            }
        }
    },
    methods:{
        handleScroll(){
            var top = document.documentElement.scrollTop;
            if( top > 60){
                this.showAbs = false;
                var opacity = top / 140;
                opacity > 1 ? 1 : opacity;
                this.opacity = { opacity }             
            }else{
                this.showAbs = true;
            }
        }
    },
    activated(){
        document.addEventListener("scroll", this.handleScroll)
    }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/variables.styl'

    .header-abs
        position: absolute
        left: .2rem
        top: .2rem
        width: .8rem
        height: .8rem
        border-radius: .4rem
        background-color: rgba(0,0,0,.8)
        text-align: center
        line-height: .8rem
        .header-abs-icon
            color: white
            font-size: .4rem
    .header-fixed
        position: fixed
        top: 0
        left: 0
        right: 0
        overflow: hidden
        height: $headerHeight
        line-height: $headerHeight
        text-align: center
        color: #fff
        font-size: .32rem
        background: $bgColor
        .header-fixed-back
            position: absolute 
            top: 0
            left: 0
            width:.64rem
            text-align:center
            font-size: .4rem
            color: #fff
        
</style>
