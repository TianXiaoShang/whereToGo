<template>
    <div>
        <city-header></city-header>
        <city-search :allCities="allCities"></city-search>   
        <city-list :hotCities="hotCities" :allCities="allCities" :letter="letter"></city-list>    
        <city-alphabet :allCities="allCities" @change="handleLetterChange"></city-alphabet>            
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
            allCities:{},
            letter:''
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
        },
        handleLetterChange(e){
            this.letter = e;
        }
    },
    mounted(){
        this.gitCityInfo()
    }
}
</script>

<style lang="stylus" scoped>
</style>

