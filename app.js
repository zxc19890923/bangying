// 导入封装接口
import http from './utils/api'
//app.js
App({
  globalData: {
    name: '',
    age: ''
  },
  // 初始化完成以后出发，全局只触发一次
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res, 'wx.login', '返回code')
        let params = {
          appid: 'wx383d463f0fb06872',
          secret: '3677240bc4bb5605d5f40bac4cce6434',
          js_code: res.code,
          grant_type: 'authorization_code'
        }
        http.getOpenId({
          data: params,
          success: success => {
            console.log(success, '获取code信息')
            // this.globalData.name = "zhangxuchao" 修改
            console.log(this.globalData.name)
          }
        })
      }
    })
  }
})