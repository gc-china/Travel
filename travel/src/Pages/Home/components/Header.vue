<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span> 输入城市/游玩主题/景点</div>
    <router-link to="/City">
      <div class="header-right arrow-icon">{{this.city}}<span class="iconfont">&#xe64a;</span></div>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            city: {
                type: String,
            }
        }
    }
</script>
<!--scoped 表示改组件的css只对这个组件有效-->
<style lang="stylus" scoped>

  /*
  在Style 中引用其他Style 中在加个～
  在这Style 是自定义别名  style==../../../src/assets/style
  */
  @import '~styles/varibles.styl'
  .header
    /*1rem=50px;*/
    display: flex
    line-height: .86rem;
    background $bgColor
    color #ffffff

    .header-left
      width: .64rem
      float: left

      .back-icon
        text-align: center
        font-size: .4rem

    .header-input
      flex: 1
      background #ffffff
      padding-left: .2rem
      color: #ccc
      border-radius: .1rem
      margin-top: .12rem
      height: .64rem
      line-height: .64rem
      margin-left: .2rem

    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff

      .arrow-icon
        font-size: .24rem
        margin-left: -.04rem
</style>
