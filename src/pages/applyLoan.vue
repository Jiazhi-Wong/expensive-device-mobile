<template>
  <div class="applyLoan">
    <group title="填写借用申请表" label-width="6em"
           label-margin-right="1em"
           label-align="left">
      <x-input title="借用设备" required readonly
               v-model="loanMsg.deviceName"></x-input>
      <x-input title="借用人" required placeholder="请输入借用人"
               v-model="loanMsg.loaner"></x-input>
      <x-input title="联系方式" required placeholder="请输入借用人联系方式"
               type="tel"
               v-model="loanMsg.phone"></x-input>
      <x-input title="邮箱" required placeholder="请输入借用人邮箱"
               type="email"
               v-model="loanMsg.email"></x-input>
      <x-textarea title="借用用途" placeholder="请输入借用用途"
                  v-model="loanMsg.loanPurpose"
                  :show-counter="false" :rows="3"></x-textarea>
      <datetime title="借用时间" required
                v-model="loanMsg.loanTime"
                :start-date="startDate"
                :end-date="endDate"
                value-text-align="left"></datetime>
      <datetime title="归还时间" required
                v-model="loanMsg.returnTime"
                :start-date="loanMsg.loanTime"
                :end-date="endDate"
                value-text-align="left"></datetime>
      <x-textarea title="可借用时间段" readonly
                  v-model="canLoanTime"></x-textarea>
    </group>
    <box gap="10px 10px">
      <x-button type="primary" @click.native="submitLoan">确认提交</x-button>
    </box>
  </div>
</template>

<script>
  import {Group, Cell, XButton, Box, XInput, Datetime, XTextarea, Msg} from 'vux';
  import util from '@/assets/js/util';

  const defaultDay = 3;
  const oneMonthDay = 30;

  export default {
    data () {
      return {
        startDate: util.formatDate.format(new Date()),
        endDate: util.formatDate.format(new Date(Date.now() + oneMonthDay * 24 * 3600 * 1000)),
        canLoanTime: '2017/05/18-2017/05/22，2017/05/24-2017/05/30，2017/06/02-2017/06/18',
        loanMsg: {
          deviceId: this.$route.params.deviceId,
          deviceName: this.$route.params.deviceName,
          loaner: '黄嘉志',
          phone: '13268112001',
          email: '596531098@qq.com',
          loanTime: util.formatDate.format(new Date()),
          returnTime: util.formatDate.format(new Date(Date.now() + defaultDay * 24 * 3600 * 1000)),
          loanPurpose: ''
        }
      }
    },
    methods: {
      submitLoan () {
        let loanId = 123456;

        this.$router.push({
          name: '操作提示',
          params: {
            title: '申请成功',
            description: '你已申请成功，等待管理员审核。',
            type: 'success',
            buttons: [{
              text: '查看借用详情',
              type: 'primary',
              link: `/loanDetail/${loanId}`
            }, {
              text: '去往首页',
              type: 'default',
              link: '/home'
            }]
          }
        });
      }
    },
    components: {
      Group,
      Cell,
      XInput,
      Datetime,
      XTextarea,
      XButton,
      Box,
      Msg
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
