<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">

        <img class="item-img" :src="item.imgUrl"
             alt="">

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props : {
            recommendList:Array
        }
    }

</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'
  .title
    line-height .8rem
    margin-top .2rem
    text-indent .2rem
    background #eee

  .item
    overflow hidden
    display flex
    height 1.9rem

    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem

    .item-info
      padding .1rem

      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()

      .item-desc
        line-height .4rem

        color #ccc
          ellipsis()

      .item-button
        line-height .44rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        margin-top .16rem
        color #ffffff
        ellipsis()
</style>
