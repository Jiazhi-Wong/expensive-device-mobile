<template>
  <div class="msgTip">
    <msg :title="title" :description="description" :buttons="buttons" :icon="type"></msg>
  </div>
</template>

<script>
  import { Msg } from 'vux'

  export default {
    data () {
      return {
        title: this.$route.params.title,
        description: this.$route.params.description,
        type: this.$route.params.type,
        buttons: this.$route.params.buttons
      }
    },
    components: {
      Msg
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
