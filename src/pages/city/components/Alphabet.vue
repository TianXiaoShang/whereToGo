<template>
    <ul class="list">
        <li class="item" v-for="(item,key) of allCities" :key="key">{{key}}</li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
     props:{
        allCities: Object
    },
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
    .list
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute
        top: 1.58rem
        bottom:0
        right:0
        width: .4rem
        .item
            line-height: .4rem
            text-align: center
            color: $bgColor
</style>
