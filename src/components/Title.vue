
<style scoped>
  #title {
    position: relative;
    width: 100%;
    height: 100px;
    line-height: 100px;
    z-index: 20;
  }
  .title-back {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    padding: 20px;
  }
  .back {
    width: 17px;
    height: 31px;
    background: url('../../static/imgs/back.png') no-repeat;
    background-size: contain;
  }
  .title-text {
    width: 100%;
    text-align: center;
  }
  .text {
     font-size: 38px;
     font-weight: 500;
  }
</style>

<template>
  <div id="title">
    <div class="title-back" @click="pageBack">
      <div class="back"></div>
    </div>
    <div class="title-text">
      <p class="text">一键绘素描</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Title',
    props: {},
    data(){
      return {}
    },
    methods: {
      // 页面返回
      pageBack(){
        var curPath = this.$route.path
        if(curPath === '/index'){
          window.app_interface.onBackPressed()
        }else {
          this.$router.go(-1)
        }
      }
    }
  }

</script>

