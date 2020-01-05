<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont Header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .header
    position relative
    height .86rem
    line-height .86rem
    overflow hidden
    color #fff
    text-align center
    background $bgColor

    .Header-back
      position absolute
      width .64rem,
      text-align center
      font-size .4rem
      color #ffffff
      top 0
      left 0
</style>
