<template>
  <div class="applyLoan">
    <group title="填写借用申请表" label-width="5em"
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
      <datetime title="借用时间" required
                v-model="loanMsg.loanTime" value-text-align="left"></datetime>
      <datetime title="归还时间" required
                v-model="loanMsg.returnTime" value-text-align="left"></datetime>
      <x-textarea title="借用用途" placeholder="请输入借用用途"
                  v-model="loanMsg.loanPurpose" :show-counter="false" :rows="3"></x-textarea>
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

  export default {
    data () {
      return {
        nowDate: util.formatDate.format(new Date()),
        loanMsg: {
          deviceId: this.$route.params.deviceId,
          deviceName: this.$route.params.deviceName,
          loaner: '222',
          phone: '13333333',
          email: '33333@qq.com',
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
