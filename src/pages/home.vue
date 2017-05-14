<template>
  <div class="home">
    <div class="current-wrapper">
      <headTitle title-msg="当前借用设备"></headTitle>
      <form-preview
        class="device-item"
        v-for="(device, index) in currentDeviceList"
        :header-label="device.status"
        :header-value="device.deviceName"
        :body-items="device.messageList"
        :footer-buttons="device.action"
        :key="index"></form-preview>
    </div>

  </div>
</template>

<script>
  import {Group, FormPreview} from 'vux';
  import headTitle from '@/components/headTitle';

  export default {
    data() {
      return {
        currentDeviceList: [{
          deviceName: '3D打印机',
          status: '',
          messageList: [{
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
          deviceName: '3D打印机',
          status: '',
          messageList: [{
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
          deviceName: '3D打印机',
          status: '',
          messageList: [{
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
          deviceName: '3D打印机',
          status: '',
          messageList: [{
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
    components: {
      FormPreview,
      headTitle,
      Group
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .device-item {
    margin-bottom: 15px;
  }
</style>
