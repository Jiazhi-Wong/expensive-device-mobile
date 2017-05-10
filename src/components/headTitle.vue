<template>
  <div class="head-title">
    {{titleMsg}}
  </div>
</template>

<script>
  export default {
    props: ['titleMsg']
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../assets/scss/base/necessary.scss';

  .head-title {
    padding: 10px 15px;
    line-height: 40px;
    font-size: 20px;
    font-weight: bold;
    background-color: #fff;
    color: $black
  }
</style>
