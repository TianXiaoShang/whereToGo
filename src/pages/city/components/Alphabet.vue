<template>
    <ul class="list">
        <li class="item"
         v-for="item of letters" 
         :key="item"
         @click="handleLetterClick"
         @touchstart.prevent="handleTouchStart"
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
            touchStatus: false,
            startY: 0,
            timer: null
        }
    },
    update(){                             //在页面更新后，也就是本组件加载完成后，执行钩子函数，只计算一次startY节省性能
        startY = this.$refs[this.letters[0]][0].offsetTop
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
            if(this.timer){
                clearTimeout(this.timer)
            }
            timer = setTimeout(() => {       //防抖处理
                if(this.touchStatus){
                const tounchY = e.touches[0].clientY - 79
                const index = Math.floor((tounchY - this.startY) / 20)
                    if(index >= 0 && index < this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                }
            },16)
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
