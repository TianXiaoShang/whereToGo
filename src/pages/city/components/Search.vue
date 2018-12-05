<template>
    <div>
        <div class="search">
            <input type="text" class="search-input" placeholder="输入城市名或拼音" v-model="keyword">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id"  @click="handelCityClick(item.name)">{{item.name}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>

</template>

<script>
import Bscroll from 'better-scroll'
// import router from 'router'
export default {
    name: 'CitySearch',
    props:{
        allCities: Object
    },
    data(){
        return {
            keyword: '',
            list: [],
            timer: null,
        }
    },
    methods:{
    handelCityClick(city){
        //当然，在一般情况下可以直接使用conmmit调用mutations,如下：
        this.$store.commit('changeCity', city)
        this.$router.push('/')      //该方法等同于标签<router-link :to="/">
        }
    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    watch:{
        keyword(){
            if(!this.keyword){
                this.list = []
                return 
            }
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                const result = []
                for(let i in this.allCities){
                    this.allCities[i].forEach(item => {
                        if (item.spell.indexOf(this.keyword) != -1 || item.name.indexOf(this.keyword) != -1){
                            result.push(item)
                        }
                    })
                }
                this.list = result;
            },100)
        }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
    
    .search
        height .72rem
        background: $bgColor
        padding: 0 .1rem
        .search-input
            box-sizing: border-box
            height: .62rem
            line-height: .62rem
            padding: 0 .1rem
            width: 100%
            text-align: center
            border-radius: .06rem
            color: #666
    .search-content
        overflow: hidden
        z-index: 100
        position: absolute 
        top: 1.58rem
        right: 0
        left: 0
        bottom: 0
        background: #eee
        .search-item
            line-height:.62rem
            padding-left: .2rem
            background: #fff
            color: #666
</style>

