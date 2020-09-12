import {http} from './http'
function getUserInfoApi (params) {
  http('/login/account', 'post', params)
}
function getOpenId (params) {
  http('https://api.weixin.qq.com/sns/jscode2session', 'get', params)
}
export default {
  getUserInfoApi,
  getOpenId
}