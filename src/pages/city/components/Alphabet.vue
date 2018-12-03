<template>
    <ul class="list">
        <li class="item"
         v-for="item of letters" 
         :key="item"
         @click="handleLetterClick"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd"
         :ref="item"
         >{{item}}</li>
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
     props:{
        allCities: Object
    },
    data(){
        return{
            touchStatus: false
        }
    },
    computed:{
       letters(){
            const letters =[]
            for(let i in this.allCities){
                letters.push(i)
            }
            return letters
        }
    },
    methods:{
        handleLetterClick(e){
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart(){
            this.touchStatus = true
        },
        handleTouchMove(e){
            var startY = this.$refs[this.letters[0]][0].offsetTop
            var tounchY = e.touches[0].clientY - 79
            var index = Math.floor((tounchY - startY) / 20)
            if(index >= 0 && index < this.letters.length){
                this.$emit('change',this.letters[index])
            }
        },
        handleTouchEnd(){
            this.touchStatus = false
        }         
    }
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
