<template>
  <div class="icons">
    <div class="icon" v-for="item of iconList" :key="item.id">
      <div class="icon-img"><img class="icon-img-content"
                                 :src="item.imgUrl" alt="">
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>

  </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        props: {
            iconList: Array
        }
    }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%

  .icons
    padding-bottom 50%
    overflow hidden
    margin-top .1rem
    height 0

    .icon
      overflow hidden
      float left
      height 0
      position relative
      width 25%
      padding-bottom 25%

      .icon-img
        position absolute
        left 0
        top 0
        bottom .44rem
        box-sizing border-box
        padding .1rem

        .icon-img-content
          display block
          margin 0 auto
          height 100%

      .icon-desc
        position absolute
        left 0
        bottom 0
        right 0
        line-height .44rem
        text-align center
        color $darkTextColor
        ellipsis()

</style>
