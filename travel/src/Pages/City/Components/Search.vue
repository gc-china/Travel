<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名称和拼音">

  </div>
</template>

<script>
    export default {
        name: "CitySearch"
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor

    .search-input
      box-sizing border-box
      height .6rem
      line-height .6rem
      width 100%
      border-radius .06rem
      text-align center
      color #666
      padding 0 .1rem
</style>
