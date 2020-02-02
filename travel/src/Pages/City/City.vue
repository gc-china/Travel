<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
    import CityHeader from "./Components/Header";
    import CitySearch from "./Components/Search";
    import CityList from "./Components/List";
    import CityAlphabet from "./Components/Alphabet";
    export default {
        name: "City",
        components: {CityAlphabet, CityList, CitySearch, CityHeader}
    }
</script>

<style scoped lang="stylus">

</style>
