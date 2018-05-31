// const base_url = 'http://192.168.2.77:8080/'
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
  fetch(api.changeStyle, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json'
    }),
    mode: 'cors',
    body: paramsData
  })
    .then(res => {
      return res.json()
    })
    .then(res => {
      if (res.ok) {
        success(res)
      } else {
        fail()
      }
    })
}
