<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {}
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import "./assets/iconfont/iconfont.css";

  html {
    background-color: #fbf9fe;
  }

  html, body, #app {
    width: 100%;
    height: 100%;
  }
</style>
