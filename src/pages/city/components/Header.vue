<template>
    <div>
        <div class="header">
            <router-link to="/">
            <div class="iconfont back-icon">&#xe624;</div>    
            </router-link>
                    
            城市选择
        </div>
    </div>

</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
    .header
        position: relative
        overflow: hidden
        height: $headerHeight
        line-height: $headerHeight
        text-align: center
        color: #fff
        font-size: .32rem
        background: $bgColor
        .back-icon
            position: absolute 
            top: 0
            left: 0
            width:.64rem
            text-align:center
            font-size: .4rem
            color: #fff

</style>

