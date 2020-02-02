<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    // 引入下拉优化组件  better-scroll
    import BScroll from "better-scroll";

    export default {
        name: "CityList",
        mounted() {
            // 将better-scroll 挂载到Dom 上
            this.scroll = new BScroll(this.$refs.wrapper);
        },
        props: {
            hot: Array,
            cities: Object,

        }
    }
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0

    .border-topbottom
      &:before
        border-color #ccc

      &:after
        border-color #ccc

    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      font-size .26rem

    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem

      .button-wrapper
        width 33.3%
        float left

        .button
          padding .1rem
          margin .1rem
          text-align center
          border .02rem solid #ccc
          border-radius .06rem


    .item-list
      .item
        line-height .76rem
        padding-left .2rem
        color #666

    .border-bottom
      &:before
        border-color #ccc

</style>
