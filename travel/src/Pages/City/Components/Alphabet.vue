<template>

  <ul class="list">
    <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props: {
            cities: Object
        }
    }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem


    .item
      line-height .4rem
      color $bgColor
      text-align center

</style>

