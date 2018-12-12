<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallargImgs="gallargImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>        
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
    name: 'Detail',
    data(){
        return {
            sightName: '',
            bannerImg: '',
            gallargImgs: [],
            list: []
        }
    },
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    methods:{
        gitDetailInfo(){
            axios.get('/api/detail.json',{    //拼接id的意思，除了字符串拼接的另一种方法
                params:{
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc(res){
            var res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallargImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    },
    mounted(){
        this.gitDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height: 20rem
</style>

