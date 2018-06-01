<style scoped>
#photo-area {
  position: relative;
}
.main-con {
  position: relative;
  width: 700px;
  max-height: 100%;
  padding: 30px;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 5;
}
.pin {
  position: absolute;
  top: -37px;
  width: 35px;
  height: 62px;
  background: url('../../static/img/pin.png') no-repeat;
  background-size: contain;
}
.pin-left {
  left: 14px;
}
.pin-right {
  right: 14px;
}
.photo-con {
  width: 100%;
  max-height: 70vh;
  overflow: hidden;
}
.photo-con > div {
  display: flex;
  justify-content: center;
  align-items: center; 
}
/* .photo-con img {
  display: block;
  width: 100%;
  height: 100%;
} */
.mask-con {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 700px;
  padding: 30px;
  box-sizing: border-box;
}
.mask-img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.mask-con img {
  display: block;
  width: 100%;
  height: 100%;
}
.shadow-con {
  position: absolute;
  left: 0;
  bottom: -17px;
  width: 100%;
  height: 50px;
  background: url('../../static/img/shadow.png') no-repeat;
  background-size: cover;
}
</style>
<template>
  <div id="photo-area">
    <div class="main-con">
      <div class="pin-con">
        <div class="pin pin-left"></div>
        <div class="pin pin-right"></div>
      </div>
        <div class="photo-con">
        <div>
          <slot name="photo-img"></slot>
        </div>
      </div>

    </div>
    <div class="shadow-con">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoArea',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

