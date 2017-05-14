<template>
  <div class="historyDevice">
    <div class="no-device" v-if="historyDeviceList.length === 0">无历史借用记录</div>
    <form-preview
      v-if="historyDeviceList.length !== 0"
      class="device-item"
      v-for="(device, index) in historyDeviceList"
      :header-label="device.deviceName"
      :header-value="device.status"
      :body-items="device.messageList"
      :footer-buttons="device.action"
      :key="index"></form-preview>
  </div>
</template>

<script>
  import {FormPreview} from 'vux';

  export default {
    data() {
      return {
        historyDeviceList: [{
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
            link: '/loanDetail/123456',
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
            link: '/loanDetail/123456',
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
            link: '/loanDetail/123456',
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
            link: '/loanDetail/123456',
            style: 'primary'
          }]
        }]
      }
    },
    methods: {
    },
    components: {
      FormPreview
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .device-item {
    margin-bottom: 15px;
  }
</style>
