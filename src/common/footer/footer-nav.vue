<template>
  <div class="footer-wrap">
    <div class="nav-wrap">
      <div
        class="nav-item"
        v-for="(item, index) of items"
        :key="item.name"
        :class="{active: index === indexType}"
        @click="$router.push(item.push)"
      >
        <div class="nav-icon">
          <img :src="index === indexType ? item.iconActive : item.icon" />
        </div>
        <p
          class="nav-text"
          :class="{active: index === indexType}"
        >{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {navData} from '@/assets/js/data'
export default {
  name: 'footer-nav',
  props: ['indexType'],
  data () {
    return {
      items: navData
    }
  }
}
</script>

<style lang='stylus' scoped>
  .footer-wrap
    position: fixed
    bottom: 0
    width: 100%
    height: .98rem
    background-color: #fff
    border-top: 1px solid #e5e5e5
    .nav-wrap
      display: flex
      height: 100%
      align-items: center
      .nav-item
        flex: 1
        text-align: center
        font-size: .24rem
        color: #999
        &.active
          color: #a95dd1
        .nav-icon
          width: .44rem
          height: .44rem
          margin: 0 auto
        .nav-text
          margin-top: .08rem
</style>
