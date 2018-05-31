<style scoped>
#result-page {
  position: absolute;
  left: 0;
  top: 0;
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
  position: fixed;
  left: 0;
  bottom: 53px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 750px;
  z-index: 10;
}
.btn {
  display: flex;
  height: 108px;
  justify-content: center;
  align-items: center;
  font-size: 38px;
  color: #fff;
  border-radius: 10px;
}
.again-btn {
  width: 257px;
  background-color: #e65253;
}

.again-btn i {
  width: 35px;
  height: 41px;
  margin-right: 13px;
  background-size: contain;
  background: url('../../static/imgs/again.png') no-repeat;
}

.wechat-friend,
.wechat-circle {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wechat-friend i,
.wechat-circle i {
  display: block;
  width: 90px;
  height: 90px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 12px;
}
.wechat-friend p,
.wechat-circle p {
  line-height: 1;
  font-family: 'Microsoft Yahei';
  font-size: 18px;
  color: #2b414e;
}

.wechat-friend i {
  background-image: url('../../static/imgs/wechatFriend.png');
}
.wechat-circle i {
  background-image: url('../../static/imgs/wechatCircle.png');
}

@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .photo-container {
    margin-top: 205px;
  }
  .button-con {
    bottom: 70px;
  }
}
</style>


<template>
  <div id="result-page">
    <div class="photo-container">
      <PhotoArea>
        <template slot="photo-img">
          <img :src="'http://changefacetestnew.j.cn' + this.$route.query.sketchImg" alt="">
        </template>
      </PhotoArea>
    </div>
    <div class="button-con">
      <div class="wechat-friend" @click="shareFriend">
        <i></i>
        <p>微信好友</p>
      </div>
      <div class="wechat-circle" @click="shareCircle">
        <i></i>
        <p>朋友圈</p>
      </div>
      <div class="again-btn btn" @click="again">
        <i></i>
        <p class="again">再来一张</p>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoArea from '@/components/PhotoArea'
export default {
  name: 'Result',
  components: {
    PhotoArea
  },
  beforeRouteEnter: (to, from, next) => {
    if(from.name == 'Index') {
      TOOLS._send1_1('result')
    }
    next()
  },
  methods: {
    again() {
      TOOLS._send1_1('again')
      this.$router.push({ name: 'Index' })
    },
    // 分享到好友(图片)
    shareFriend() {
      TOOLS._send1_1('wechatfriend')
      var that = this
      var resultUrl = window.location.href
      window.app_interface.shareToFriend(JSON.stringify({
        "result": resultUrl,
        "isShareImg": true,               //是否以图片的形式分享，默认为以链接形式分享
        "shareImgUrl": that.$route.query.shareImg
      }))
    },
    // 分享到朋友圈(图片)
    shareCircle() {
      TOOLS._send1_1('wechatcircle')
      var that = this
      var resultUrl = window.location.href
      window.app_interface.shareToCircle(JSON.stringify({
        "result": resultUrl,
        "isShareImg": true,               //是否以图片的形式分享，默认为以链接形式分享
        "shareImgUrl": that.$route.query.shareImg
      }))
    }
  }
}
</script>
