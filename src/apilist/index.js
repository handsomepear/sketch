// const base_url = 'http://192.168.2.77:8080/'
import axios from 'axios'
const base_url = 'http://changeface.j.cn/'

const api = {
  changeStyle: base_url + 'api/doChangeStyle'
}
/**
 * 请求后台变换图片的接口
 * @param {*} uid -> 她社区的用户标识
 * @param {*} photos -> 小程序传入的参数
 * @param {*} photoBase64Data -> H5 传入的参数
 */
export default function getStyle(uid, photoBase64Data, success, fail) {
  let paramsData = new FormData()
  paramsData.append('uid', uid)
  paramsData.append('photoBase64Data', photoBase64Data)
  axios({
    method: 'post',
    url: api.changeStyle,
    data: paramsData,
    config: {
      timeout: 15000,
      headers: { 'Content-Type': 'multipart/form-data' }
    }
  }).then(function(res) {
    var data = res.data
    if(data.ok){
      success(data)
    }else {
      fail(data)
    }
  }).catch(function(err){
    fail(err)
  })
}
