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
        :header-label="device.status"
        :header-value="device.deviceName"
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
          deviceName: '3D打印机',
          status: '',
          messageList: [{
            label: '设备状态',
            value: '正常'
          }, {
            label: '设备管理人',
            value: '设备管理员1'
          }, {
            label: '联系方式',
            value: '13284758394'
          }],
          action: [{
            text: '查看详情',
            link: '/deviceDetail',
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
