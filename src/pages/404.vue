<template>
  <div class="notFound-wrapper">
    <p class="not-found">404</p>
    <p class="not-found-text">该页面不存在</p>
    <p class="back-home" @click="goBack">返回上一页</p>
  </div>
</template>

<script>
  export default {
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../assets/scss/base/necessary.scss';

  .notFound-wrapper {
    width: 100%;
    height: 100%;
    background-color: #FCFCFC;
  }

  .not-found, .not-found-text {
    font-size: 24px;
    text-align: center;
    color: #606f80;
  }

  .not-found {
    font-size: 72px;
    padding-top: 180px;
    margin-bottom: 30px;
  }

  .back-home {
    width: 50%;
    margin: 30px auto 0;
    font-size: 20px;
    text-align: center;
    text-decoration: underline;
    color: $green;
    cursor: pointer;
  }
</style>
