<style scoped>
#app {
  display: none;
  position: fixed;
  width: 750px;
  height: 100%;
  /* margin: 0 auto; */
  background: url('../static/img/bg.jpg') no-repeat center;
  background-size: cover;
}
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  #app {
    padding-top: 50px;
  }
}
</style>


<template>
  <section id="app" :class="{expand:(this.$route.path == '/expand')}">
    <Title />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </section>
</template>

<script>
import Title from '@/components/Title'
export default {
  name: 'App',
  components: {
    Title
  },
  mounted(){
    document.getElementById('page-loading').style.display = 'none'
    document.getElementById('app').style.display = 'block'
  }
}
</script>

<style>
</style>
