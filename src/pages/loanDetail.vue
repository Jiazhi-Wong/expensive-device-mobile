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
      <!--<div>-->
        <!--<flexbox>-->
          <!--<flexbox-item>-->
            <!--<x-button type="primary" @click.native="goDeviceDetail">查看该设备详情</x-button>-->
          <!--</flexbox-item>-->
          <!--<flexbox-item>-->
            <!--<x-button @click.native="goHome">去往首页</x-button>-->
          <!--</flexbox-item>-->
        <!--</flexbox>-->
      <!--</div>-->

      <!--<div>-->
        <!--<divider>设备管理员审核借用申请</divider>-->
        <!--<flexbox>-->
          <!--<flexbox-item>-->
            <!--<x-button type="primary" @click.native="goToSuccess">通过</x-button>-->
          <!--</flexbox-item>-->
          <!--<flexbox-item>-->
            <!--<x-button type="warn" @click.native="goToFail">不通过</x-button>-->
          <!--</flexbox-item>-->
        <!--</flexbox>-->
      <!--</div>-->

      <!--<div>-->
        <!--<divider>学院领导审核借用申请</divider>-->
        <!--<flexbox>-->
          <!--<flexbox-item>-->
            <!--<x-button type="primary" @click.native="goToSuccess">通过</x-button>-->
          <!--</flexbox-item>-->
          <!--<flexbox-item>-->
            <!--<x-button type="warn" @click.native="">不通过</x-button>-->
          <!--</flexbox-item>-->
        <!--</flexbox>-->
      <!--</div>-->


      <!--<div>-->
        <!--<divider>设备管理员确认已取用设备</divider>-->
        <!--<flexbox>-->
          <!--<flexbox-item>-->
            <!--<x-button type="primary" @click.native="goToSuccess">已取用</x-button>-->
          <!--</flexbox-item>-->
          <!--<flexbox-item>-->
            <!--<x-button type="warn" @click.native="">借用取消</x-button>-->
          <!--</flexbox-item>-->
        <!--</flexbox>-->
      <!--</div>-->

      <div>
        <divider>设备管理员确认已归还设备</divider>
        <flexbox>
          <flexbox-item>
            <x-button type="primary" @click.native="goToSuccess">已归还</x-button>
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
          value: '使用中'
        }, {
          title: '借用设备',
          value: '3D打印机'
        }, {
          title: '借用人',
          value: '黄嘉志'
        }, {
          title: '联系方式',
          value: '13268112001'
        }, {
          title: '邮箱',
          value: '596531098@qq.com'
        }, {
          title: '借用时间',
          value: '2017-05-18'
        }, {
          title: '归还时间',
          value: '2017-05-21'
        }, {
          title: '借用用途',
          value: '用于3D打印相关的实验'
        }],
        loanTimeLine: [
          {
            description: '提交借用申请',
            time: '2017-05-18 10:10'
          },
          {
            description: '设备管理员审核通过',
            time: '2017-05-18 11:00'
          },
          {
            description: '学院领导审核通过',
            time: '2017-05-18 12:10'
          },
          {
            description: '已取用设备',
            time: '2017-05-18 14:56'
          },
//          {
//            description: '设备已归还',
//            time: '2017-05-21 10:01'
//          }
        ]
      }
    },
    methods: {
      goDeviceDetail () {
        this.$router.push('/deviceDetail')
      },
      goHome () {
        this.$router.push('/home')
      },
      goToSuccess () {
        this.$router.push({
          name: '操作提示',
          params: {
            title: '确认操作成功',
            description: '确认已归还设备成功操作。',
            type: 'success',
            buttons: [{
              text: '返回',
              type: 'primary',
              link: `/loanDetail/123456`
            }, {
              text: '去往首页',
              type: 'default',
              link: '/home'
            }]
          }
        });
      },
      goToFail () {

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
