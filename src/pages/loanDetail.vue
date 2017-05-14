<template>
  <div class="loanDetail">
    <group title="借用流程" label-width="5em"
           label-margin-right="1em"
           label-align="left">
      <timeline class="timeline-detail">
        <timeline-item v-for="(item, index) in loanTimeLine" :key="index">
          <h4>{{item.description}}</h4>
          <p>{{item.time}}</p>
        </timeline-item>
      </timeline>
    </group>
    <group title="借用信息" label-width="5em"
           label-margin-right="1em"
           label-align="left">
      <cell v-for="(item, index) in loanInfoList"
            :title="item.title"
            :value="item.value"
            value-align="left" :key="index"></cell>
    </group>
    <box gap="10px 10px">
      <div>
        <flexbox>
          <flexbox-item>
            <x-button type="primary" @click.native="goDeviceDetail">查看该设备详情</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button @click.native="goHome">去往首页</x-button>
          </flexbox-item>
        </flexbox>
      </div>
      <div>
        <divider>设备管理员审核借用申请</divider>
        <flexbox>
          <flexbox-item>
            <x-button type="primary" @click.native="">通过</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="warn" @click.native="">不通过</x-button>
          </flexbox-item>
        </flexbox>
      </div>
      <div>
        <divider>学院领导审核借用申请</divider>
        <flexbox>
          <flexbox-item>
            <x-button type="primary" @click.native="">通过</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="warn" @click.native="">不通过</x-button>
          </flexbox-item>
        </flexbox>
      </div>
      <div>
        <divider>设备管理员确认已取用设备</divider>
        <flexbox>
          <flexbox-item>
            <x-button type="primary" @click.native="">确认</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="warn" @click.native="">借用取消</x-button>
          </flexbox-item>
        </flexbox>
      </div>
      <div>
        <divider>设备管理员确认已归还设备</divider>
        <flexbox>
          <flexbox-item>
            <x-button type="primary" @click.native="">确认</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="warn" @click.native="">催还</x-button>
          </flexbox-item>
        </flexbox>
      </div>
    </box>


  </div>
</template>

<script>
  import {Group, Cell, Timeline, TimelineItem, XButton, Box, Flexbox, FlexboxItem, Divider} from 'vux';

  export default {
    data () {
      return {
        loanInfoList: [{
          title: '当前状态',
          value: '待管理员审核'
        }, {
          title: '借用设备',
          value: '3D打印机'
        }, {
          title: '借用人',
          value: '小明'
        }, {
          title: '联系方式',
          value: '1333333333'
        }, {
          title: '邮箱',
          value: '3333333@qq.com'
        }, {
          title: '借用时间',
          value: '2017-05-05'
        }, {
          title: '归还时间',
          value: '2017-05-08'
        }, {
          title: '借用用途',
          value: '用于实验用于实验用于实验用于实验用于实验用于实验用于实验用于实验用于实验'
        }],
        loanTimeLine: [{
          description: '提交借用申请',
          time: '2017-05-05 10:10:10'
        }, {
          description: '设备管理员审核通过',
          time: '2017-05-05 10:10:10'
        }, {
          description: '学院领导审核通过',
          time: '2017-05-05 10:10:10'
        }, {
          description: '已取用设备',
          time: '2017-05-05 10:10:10'
        }, {
          description: '设备已归还',
          time: '2017-05-05 10:10:10'
        }, ]
      }
    },
    methods: {
      goDeviceDetail () {
        this.$router.push('/deviceDetail')
      },
      goHome () {
        this.$router.push('/home')
      }
    },
    mounted () {
      console.log(this.$route.params.loanId);
    },
    components: {
      Group,
      Cell,
      Timeline,
      TimelineItem,
      XButton,
      Box,
      Flexbox,
      FlexboxItem,
      Divider
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .timeline-detail {
    p {
      color: #888;
      font-size: 0.8rem;
    }

    h4 {
      color: #666;
      font-weight: normal;
    }
  }
</style>
