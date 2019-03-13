<template>
  <div id="app">
    <keep-alive include="home,about">
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {},
  methods: {}
}
</script>

<style></style>
