<style scoped>
#loading-con {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.8);
  z-index: 11;
}
.loading {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 200px;
  height: 200px;
  background: url('../../static/img/loading.png') no-repeat;
  animation: loading 4s steps(47) infinite;
}
@keyframes loading {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -9400px 0;
  }
}
</style>

<template>
  <div id="loading-con">
    <div class="loading"></div>
  </div>
</template>


<script>
export default {
  name: 'Loading'
}
</script>

