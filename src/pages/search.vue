<template>
  <div class="search">
    <search
      v-model="searchValue"
      auto-scroll-to-top
      @on-submit="onSubmit"></search>
    <div class="result-wrapper">
      <div class="no-device" v-if="searchDeviceList.length === 0">无设备，请重新搜索。</div>
      <form-preview
        v-if="searchDeviceList.length !== 0"
        class="device-item"
        v-for="(device, index) in searchDeviceList"
        :header-label="device.deviceName"
        :header-value="device.status"
        :body-items="device.messageList"
        :footer-buttons="device.action"
        :key="index"></form-preview>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
  import {Search, FormPreview} from 'vux';

  export default {
    data() {
      return {
        searchValue: '',
        searchDeviceList: [{
          deviceName: '标题一',
          status: 1,
          messageList: [{
            label: '借用设备',
            value: '3D打印机'
          }, {
            label: '状态',
            value: 1
          }, {
            label: '设备管理人',
            value: '李老师'
          }, {
            label: '联系方式',
            value: '1333333333'
          }],
          action: [{
            text: '查看详情',
            link: '/loanDetail',
            style: 'primary'
          }]
        }, {
          deviceName: '标题一',
          status: 1,
          messageList: [{
            label: '借用设备',
            value: '3D打印机'
          }, {
            label: '状态',
            value: 1
          }, {
            label: '设备管理人',
            value: '李老师'
          }, {
            label: '联系方式',
            value: '1333333333'
          }],
          action: [{
            text: '查看详情',
            link: '/loanDetail',
            style: 'primary'
          }]
        }, {
          deviceName: '标题一',
          status: 1,
          messageList: [{
            label: '借用设备',
            value: '3D打印机'
          }, {
            label: '状态',
            value: 1
          }, {
            label: '设备管理人',
            value: '李老师'
          }, {
            label: '联系方式',
            value: '1333333333'
          }],
          action: [{
            text: '查看详情',
            link: '/loanDetail',
            style: 'primary'
          }]
        }, {
          deviceName: '标题一',
          status: 1,
          messageList: [{
            label: '借用设备',
            value: '3D打印机'
          }, {
            label: '状态',
            value: 1
          }, {
            label: '设备管理人',
            value: '李老师'
          }, {
            label: '联系方式',
            value: '1333333333'
          }],
          action: [{
            text: '查看详情',
            link: '/loanDetail',
            style: 'primary'
          }]
        }]
      }
    },
    methods: {
      onSubmit () {
        alert(this.searchValue)
      }
    },
    components: {
      Search,
      FormPreview
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .device-item {
    margin-bottom: 15px;
  }
</style>
