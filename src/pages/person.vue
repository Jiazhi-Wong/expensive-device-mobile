<template>
  <div class="person" style="">
    <div class="banner-wrapper">
      <img class="blur" :src="bgUrl">
      <p class="center"><img :src="bgUrl"></p>
    </div>
    <group>
      <cell-box is-link link="/personalInfo">
        个人信息
      </cell-box>
      <cell-box is-link link="/historyDevice">
        历史借用记录
      </cell-box>
    </group>
  </div>
</template>

<script>
  import {Group, CellBox} from 'vux';

  export default {
    data () {
      return {
        bgUrl: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg'
      }
    },
    components: {
      Group,
      CellBox
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .banner-wrapper {
    position: relative;
    height: 180px;
    margin-bottom: 15px;
    overflow: hidden;
  }

  .blur {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    filter: blur(18px);
  }

  .center {
    position: absolute;
    width: 100%;
    padding-top: 20px;
    text-align: center;
    color: #fff;
    font-size: 18px;
  }

  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
</style>
