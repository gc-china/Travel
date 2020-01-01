<template>
  <div>
    <div class="title">周末去哪游</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendedList" :key="item.id">
        <div class="item-img-swapper">
          <img class="item-img" :src="item.imgUrl"
               alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.itemTitle}}</p>
          <p class="item-desc">{{item.itemDesc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
        data() {
            return {
                recommendedList: [{
                    id: '001',
                    imgUrl: 'https://img1.qunarzz.com/sight/p0/1411/4f/146031f0bc5d7e0dd960d3f5bf0c9eca.water.jpg_600x330_6858704b.jpg',
                    itemTitle: '大连圣亚海洋世界',
                    itemDesc: '浪漫大连首站 浪漫的海洋主题公园',

                }, {
                    id: '001',
                    imgUrl: 'https://img1.qunarzz.com/sight/p0/1411/4f/146031f0bc5d7e0dd960d3f5bf0c9eca.water.jpg_600x330_6858704b.jpg',
                    itemTitle: '大连圣亚海洋世界',
                    itemDesc: '浪漫大连首站 浪漫的海洋主题公园',

                }, {
                    id: '001',
                    imgUrl: 'https://img1.qunarzz.com/sight/p0/1411/4f/146031f0bc5d7e0dd960d3f5bf0c9eca.water.jpg_600x330_6858704b.jpg',
                    itemTitle: '大连圣亚海洋世界',
                    itemDesc: '浪漫大连首站 浪漫的海洋主题公园',

                }
                ]
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
