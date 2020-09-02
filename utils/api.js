import {http} from './http'
function getUserInfoApi (params) {
  http('/login/account', 'post', params)
}
export default {
  getUserInfoApi
}