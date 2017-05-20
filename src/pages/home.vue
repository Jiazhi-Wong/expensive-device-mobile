<template>
  <div class="home">
    <!--<div class="current-wrapper">-->
    <!--<headTitle title-msg="当前借用设备"></headTitle>-->
    <!--<form-preview-->
    <!--class="device-item"-->
    <!--v-for="(device, index) in currentDeviceList"-->
    <!--:header-label="device.status"-->
    <!--:header-value="device.deviceName"-->
    <!--:body-items="device.messageList"-->
    <!--:footer-buttons="device.action"-->
    <!--:key="index"></form-preview>-->
    <!--</div>-->
    <div class="manage-wrapper">
      <headTitle title-msg="可管理的借用记录"></headTitle>
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
            label: '借用状态',
            value: '使用中'
          }, {
            label: '借用时间',
            value: '2017-05-18'
          }, {
            label: '归还时间',
            value: '2017-05-21'
          }, {
            label: '设备管理员',
            value: '设备管理员1'
          }, {
            label: '联系方式',
            value: '13284758394'
          }],
          action: [{
            text: '查看详情',
            link: '/loanDetail/123456',
            style: 'primary'
          }]
        },
//          {
//            deviceName: '检测仪',
//            status: '',
//            messageList: [{
//              label: '状态',
//              value: '使用中'
//            }, {
//              label: '借用时间',
//              value: '2017-05-08'
//            }, {
//              label: '归还时间',
//              value: '2017-05-11'
//            }, {
//              label: '设备管理人',
//              value: '王老师'
//            }, {
//              label: '联系方式',
//              value: '1358375384'
//            }],
//            action: [{
//              text: '查看详情',
//              link: '/loanDetail/123456',
//              style: 'primary'
//            }]
//          }
        ]
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
