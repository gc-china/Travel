<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
    import CityHeader from "./Components/Header";
    import CitySearch from "./Components/Search";

    export default {
        name: "City",
        components: {CitySearch, CityHeader}
    }
</script>

<style scoped lang="stylus">

</style>
