<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>   
        <city-list :hotCities="hotCities" :allCities="allCities"></city-list>    
        <city-alphabet :allCities="allCities"></city-alphabet>            
    </div>
</template>

<script>
import CityHeader from './components/Header' 
import CitySearch from './components/Search' 
import CityList from './components/List' 
import CityAlphabet from './components/Alphabet' 
import axios from 'axios'


export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return{
            hotCities:[],
            allCities:{}
        }
    },
    methods:{
        gitCityInfo(){
            axios.get('/api/city.json')
            .then(this.handleGetCityInfosucc)
        },
        handleGetCityInfosucc(res){
            var res = res.data
            if(res && res.data){
                const data = res.data
                this.allCities = data.cities;
                this.hotCities = data.hotCities;
            }
        }
    },
    mounted(){
        this.gitCityInfo()
    }
}
</script>

<style lang="stylus" scoped>



</style>

