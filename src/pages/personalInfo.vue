<template>
  <div class="personalInfo">
    <group title="个人信息" label-width="5em" label-margin-right="1em" label-align="left">
      <cell v-for="(item, index) in infoList"
            :title="item.title"
            :value="item.value"
            value-align="left" :key="index"></cell>
    </group>
    <!--<x-button @click.native="goBack">返回</x-button>-->
  </div>
</template>

<script>
  import {Group, Cell, XButton} from 'vux';

  export default {
    data () {
      return {
        infoList: [{
          title: '姓名',
          value: '小明'
        }, {
          title: '学号/工号',
          value: '3113000100'
        }, {
          title: '联系方式',
          value: '13333333333'
        }, {
          title: '邮箱',
          value: '3333333@qq.com'
        }, {
          title: '团队',
          value: '机械团队'
        }]
      }
    },
    methods: {
      goBack () {
        this.$router.go(-1);
      }
    },
    components: {
      Group,
      Cell,
      XButton
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .personalInfo {
    width: 100%;
    height: 100%;
  }
</style>
