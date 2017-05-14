<template>
  <div class="main">
    <router-view class="route-wrapper"></router-view>
    <div class="footer-nav">
      <router-link tag="div" class="nav-item"
                   v-for="(item, index) in navList"
                   :to="item.to" :key="index">
        <div class="iconfont" :class="item.iconClass"></div>
        {{item.desc}}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList: [
          {
            desc: '首页',
            iconClass: 'icon-home7',
            to: '/home'
          },
          {
            desc: '搜索',
            iconClass: 'icon-search',
            to: '/search'
          },
          {
            desc: '我的',
            iconClass: 'icon-person1',
            to: '/person'
          }
        ]
      }
    },
    mounted() {
      if (this.$route.name === 'main') {
        this.$router.push({name: '首页'})
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import '../assets/scss/base/necessary.scss';

  .route-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 52px;
    overflow: auto;
    background-color: #fbf9fe;
  }

  .footer-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 52px;
    display: flex;
    border-top: 1px #d5d5d5 solid;
    color: $grey;
  }

  .nav-item {
    flex: auto;
    text-align: center;
    background-color: #FCFCFC;
    font-size: 14px;
  }

  .router-link-active {
    color: $green;
  }

  .iconfont {
    height: 32px;
    line-height: 32px;
    font-size: 26px;
  }
</style>
