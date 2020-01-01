<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendedList" :key="item.id">

        <img class="item-img" :src="item.imgUrl"
             alt="">

        <div class="item-info">
          <p class="item-title">{{item.itemTitle}}</p>
          <p class="item-desc">{{item.itemDesc}}</p>
          <button class="item-button">{{item.itemButton}}</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        data() {
            return {
                recommendedList: [{
                    id: '001',
                    imgUrl: 'https://imgs.qunarzz.com/p/tts0/1912/a6/504be5bc51382e02.png_160x160_fc5d5997.png',
                    itemTitle: '大连圣亚海洋世界',
                    itemDesc: '浪漫大连首站 浪漫的海洋主题公园',
                    itemButton: '查看详情'

                }, {
                    id: '001',
                    imgUrl: 'https://imgs.qunarzz.com/p/tts0/1912/a6/504be5bc51382e02.png_160x160_fc5d5997.png',
                    itemTitle: '大连圣亚海洋世界',
                    itemDesc: '浪漫大连首站 浪漫的海洋主题公园',
                    itemButton: '查看详情'

                }, {
                    id: '001',
                    imgUrl: 'https://imgs.qunarzz.com/p/tts0/1912/a6/504be5bc51382e02.png_160x160_fc5d5997.png',
                    itemTitle: '大连圣亚海洋世界',
                    itemDesc: '浪漫大连首站 浪漫的海洋主题公园',
                    itemButton: '查看详情'

                }]
            }
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
