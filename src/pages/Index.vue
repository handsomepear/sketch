
<style scoped>
#index-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.photo-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 9vh;
}

.button-con {
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 49px;
  width: 100%;
  height: 112px;
  z-index: 10;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 271px;
  background-color: #e65253;
  border-radius: 10px;
  font-size: 38px;
  color: #fff;
}
.album-btn i,
.camera-btn i {
  display: block;
  width: 42px;
  height: 34px;
  margin-right: 14px;
  background-size: contain;
}
.album-btn {
  margin-right: 73px;
}
.album-btn i {
  background: url('../../static/img/album.png') no-repeat;
}
.camera-btn i {
  width: 45px;
  height: 36px;
  background: url('../../static/img/camera.png') no-repeat;
}

.sumiao {
  width: 500px;
  height: 918px;
  background: url('../../static/img/sumiao.png') no-repeat;
  transform-origin: center;
  transform: scale(1.5);
  box-sizing: border-box;
  animation: draw 2s steps(15) 3;
  animation-fill-mode: forwards;
  background-position: 0 center;
}
@keyframes draw {
  from {
    background-position: 0 center;
  }
  to {
    background-position: -7500px center;
  }
}
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .photo-container {
    margin-top: 200px;
  }
  .button-con {
    bottom: 80px;
  }
}
</style>

<template>
  <div id="index-page">
    <Loading v-if="showLoading" />
    <div class="photo-container">
      <PhotoArea>
        <template slot="photo-img">
          <div class="sumiao"></div>
        </template>
      </PhotoArea>
      
    </div>
    <div class="button-con">
      <div class="album-btn btn" @click="choosePicHandle">
        <i></i>
        <p class="album">相册</p>
      </div>
      <div class="camera-btn btn" @click="takePhotoHandle">
        <i></i>
        <p class="camera">拍照</p>
      </div>
    </div>
  </div>
</template>
<script>
import PhotoArea from '@/components/PhotoArea'
import Loading from '@/components/Loading'
import getStyle from '@/apilist/index.js'
export default {
  name: 'Index',
  components: {
    PhotoArea,
    Loading,
  },
  data() {
    return {
      uid: '',
      showLoading: false
    }
  },
  mounted() {
    TOOLS._send1_1('init')
    var that = this
    that.uid = TOOLS._getQueryString('jcnuserid')
    // native 选择图片之后的回调函数 返回图片的base64数据
    window.getBase64 = function (photobase64) {
      that.showLoading = true
      that.getSketchImg(photobase64)
    }
  },
  methods: {
    // 上传图片
    choosePicHandle() {
      TOOLS._send1_1('album')
      // 传入第一个参数 String callbackname 第二个参数表示用户可选择的图片
      window.app_interface.UploadImgStreamFromAbulm('getBase64', 1)
    },
   
    // 拍照
    takePhotoHandle() {
      TOOLS._send1_1('camera')
      // 传入第一个参数 String callbackname
      // this.$router.push({name: 'Result'})
      window.app_interface.UploadImgStreamFromTake('getBase64')
    },
    // 获取素描图片
    getSketchImg(photobase64) {
      getStyle(this.uid, photobase64, this.showSketchImg, this.fail)
    },
    // 显示素描图片
    showSketchImg(data) {
      this.showLoading = false
      this.$router.push({ path: '/result', query: { sketchImg: data.imgOurs, shareImg: data.imgShare } })
    },
    fail() {
      this.showLoading = false
      alert('矮油，好像出错了诶\r\n请重试~')
    }
  }
}
</script>
