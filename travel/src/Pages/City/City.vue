<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hot="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
    import axios from 'axios';
    import CityHeader from "./Components/Header";
    import CitySearch from "./Components/Search";
    import CityList from "./Components/List";
    import CityAlphabet from "./Components/Alphabet";

    export default {
        name: "City",
        components: {CityAlphabet, CityList, CitySearch, CityHeader},
        data() {
            return {
                cities: {},
                hotCities: []
            }
        },
        methods: {
            getCityInfo() {
                axios.get('api/city.json').then(this.handleGetCityInfoSucc)
            },
            handleGetCityInfoSucc(res) {
                res = res.data;
                if (res.ret && res.data) {
                    const data = res.data;
                    this.cities = data.cities;
                    this.hotCities = data.hotCities;
                }

            }
        },
        mounted() {
            this.getCityInfo();
        },

    }
</script>

<style scoped lang="stylus">

</style>
