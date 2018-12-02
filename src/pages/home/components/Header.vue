<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩/主题</div>
            <router-link to="/city">
                <div class="header-right">
                    {{this.city}}
                    <span class="iconfont arrow-icon">&#xe64a;</span>  
                </div>
            </router-link>      
    </div>
</template>

<script>
export default {
    name:'HomeHeader',
    props:{
        city: String
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'   //引入变量库
    .header
        display:flex
        line-height: $headerHeight
        background: $bgColor
        color: #fff
        .header-left
            padding: 0 .1rem
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .35rem
        .header-input
            flex: 1
            height: .64rem
            margin-top: .11rem
            background: #fff
            border-radius: .1rem
            color: #999
            line-height: .64rem
            padding-left: .2rem
        .header-right
            width: 1.24rem
            float: right
            text-align: center
            color: #fff            
            .arrow-icon
                margin-left: -0.04rem
                font-size: .24rem
            

</style>
