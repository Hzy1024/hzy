<template>
  <div class="wrapper">
    <div class="content">
      444444444444
    </div>
    <footer-nav :indexType="3"></footer-nav>
  </div>
</template>

<script>
import FooterNav from '@/common/footer/footer-nav'
export default {
  name: 'user',
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
