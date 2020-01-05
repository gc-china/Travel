<template>
  <div>
    <div class="title">周末去哪游</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-swapper">
          <img class="item-img" :src="item.imgUrl"
               alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
        props: {
            weekendList: Array
        },
    }

</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'

  .title
    line-height .8rem
    margin-top .2rem
    text-indent .2rem
    background #eee

  .item-img-swapper
    overflow hidden
    height 0
    padding-bottom 33.9%

    .item-img
      width 100%

  .item-info
    flex 1
    padding .1rem
    min-width 0

    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()

    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()

</style>
