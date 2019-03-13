<template>
  <div class="wrapper">
    <div class="wrapper">
      hhhhhhh
    </div>
    <footer-nav :indexType="0"></footer-nav>
  </div>
</template>

<script>
import FooterNav from '@/common/footer/footer-nav'
import axios from 'axios'
export default {
  name: 'home',
  components: { FooterNav },
  data () {
    return {}
  },
  mounted () {
    this.getIndexData()
  },
  methods: {
    getIndexData () {
      console.log('初始化成功。。。')
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  div
    margin: 0 auto
</style>
