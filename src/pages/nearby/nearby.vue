<template>
  <div class="wrapper">
    <div class="content">
      2222222222
    </div>
    <footer-nav :indexType="1"></footer-nav>
  </div>
</template>

<script>
import FooterNav from '@/common/footer/footer-nav'
export default {
  name: 'commod-classify',
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
