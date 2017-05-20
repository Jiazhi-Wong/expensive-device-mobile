<template>
  <div class="loanDetail">
    <headTitle :title-msg="deviceName"></headTitle>
    <group title="设备信息" label-width="6em" label-margin-right="1em" label-align="left">
      <cell v-for="(item, index) in deviceInfoList"
            :title="item.title"
            :value="item.value"
            value-align="left" :key="index"></cell>
      <x-textarea title="可借用时间段" readonly
                  v-model="canLoanTime"></x-textarea>
    </group>
    <box gap="10px 10px">
      <x-button type="primary" @click.native="applyLoan">申请借用</x-button>
    </box>
  </div>
</template>

<script>
  import {Group, Cell, XButton, Box, XTextarea} from 'vux';
  import headTitle from '@/components/headTitle';

  export default {
    data () {
      return {
        deviceId: 123456,
        deviceName: '3D打印机',
        canLoanTime: '2017/05/18-2017/05/22，2017/05/24-2017/05/30，2017/06/02-2017/06/18',
        deviceInfoList: [{
          title: '设备状态',
          value: '正常'
        }, {
          title: '设备管理员',
          value: '李老师'
        }, {
          title: '联系方式',
          value: '13284758394'
        }, {
          title: '存放地',
          value: '工1-101'
        }]
      }
    },
    methods: {
      applyLoan () {
        this.$router.push({
          name: '申请借用',
          params: {
            deviceId: this.deviceId,
            deviceName: this.deviceName
          }
        });
      }
    },
    components: {
      Group,
      Cell,
      XButton,
      Box,
      headTitle,
      XTextarea
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
