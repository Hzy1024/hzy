<template>
  <div class="wrapper">
    <div class="content">
      333333
    </div>
    <footer-nav :indexType="2"></footer-nav>
  </div>
</template>

<script>
import FooterNav from '@/common/footer/footer-nav'
export default {
  name: 'cart',
  data () {
    return {
      list: [],
      page: 1
    }
  },
  components: { FooterNav },
  mounted () {
    
  },
  methods: {
    
  }
}
</script>

<style lang='stylus' scoped>
.wrapper
  display: inline-block;
</style>
