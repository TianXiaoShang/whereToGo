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
                    {{this.doubleCity}}
                    <span class="iconfont arrow-icon">&#xe64a;</span>  
                </div>
            </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'    //引入vuex提供的映射mapState属性插件
import { mapGetters } from 'vuex'  

export default {
    name:'HomeHeader',
    computed: {
        ...mapState(['city']),      //把vuex中的数据映射到computed计算属性中。我们就可以直接使用city即可，而无需使用{{this.$store.state.city}}比较长的代码
        // ...mapGetters(['doubleCity'])
   }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'   //引入变量库
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
            min-width: 1.04rem
            padding: 0 .1rem
            float: right
            text-align: center
            color: #fff            
            .arrow-icon
                margin-left: -0.04rem
                font-size: .24rem
</style>
