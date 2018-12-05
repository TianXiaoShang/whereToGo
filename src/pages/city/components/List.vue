<template>
    <div>
        <div class="list" ref="wrapper">
            <div>
                <div class="area">
                    <div class="title border-topbottom" >当前城市</div>
                    <div class="button-list">
                        <div class="button-wrapper">
                            <div class="button">{{this.currentCity}}</div>                         
                        </div>
                    </div>
                </div>
                <div class="area">
                    <div class="title border-topbottom" >热门城市</div>
                    <div class="button-list">
                        <div class="button-wrapper" 
                        v-for="item of hotCities" 
                        :key=item.id
                        @click="handelCityClick(item.name)"
                        >
                            <div class="button">{{item.name}}</div>                         
                        </div>
                    </div>
                </div>
                <div class="area" 
                v-for="(item,key) of allCities" 
                :key="key" 
                :ref="key"
                >
                    <div class="title border-topbottom" >{{key}}</div>
                    <div class="item-list" >
                        <div class="item border-bottom" v-for="cityName of item" :key="cityName.id"  @click="handelCityClick(cityName.name)">{{cityName.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'    //vuex同时提供了mapMutations简便方法

export default {
    name: 'CityList',
    props:{
        hotCities: Array,
        allCities: Object,
        letter: String
    },
    computed: {
        ...mapState({
            currentCity: 'city'     //除了数组还可以映射成对象
        })      
    },
    methods:{
        handelCityClick(city){
            // this.$store.dispatch('changeCity', city)    //使用dispatch驱动actions中的changeCity事件，同时将city传递过去
            //当然，在一般情况下可以直接使用conmmit调用mutations,如下：
            // this.$store.commit('changeCity', city)         在下方使用...mapMutations注册后，即可直接调用，默认走commit路径（这里的所谓注册为个人理解，便于记忆）
            this.changeCity(city)
            this.$router.push('/')      //该方法等同于标签<router-link :to="/">    
        },
        ...mapMutations (['changeCity'])   //使用该方法，将changeCity注册为commit需要传递给mutations的方法，在上方我们直接使用该方法即可。
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch:{
        letter(){
            if(this.letter){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .list
        position: absolute
        overflow: hidden 
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        .title
            line-height: .54rem 
            background: #eee 
            padding-left: .2rem
            color: #666 
            font-size: .26rem 
        .button-list
            overflow: hidden
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    padding: .1rem 0
                    margin: .1rem 
                    text-align: center                
                    border: .02rem solid #ccc
                    border-radius: .06rem 
        .item-list
            .item
                line-height: .76rem 
                padding-left: .2rem 
</style>

