const app = getApp()
Page({
  data: {
    halfScreenState: false,
    buttons: [
      {
        type: 'primary',
        className: '',
        text: '我知道了',
        value: 1
      }
    ]
  },
  onLoad (options) {
    // 获取全局变量
    console.log(app.globalData, '全局变量openid')
    // 设置全局变量的值
    app.globalData.name = "张旭超"
    console.log(app.globalData, '全局变量openid')
    // session
    wx.checkSession({
      success: (res) => {
        console.log(res, 'ckSession')
      },
      fail: (err) => {
        console.log(err, 'fail')
      }
    })
  },
  gotoAgreePage () {
    wx.navigateTo({
      url: '/pages/lender/platform/platform?item=' + JSON.stringify({name: 'zhangxuchao', age: 30}),
    })
  },
  viewInfo () {
    this.setData({
      halfScreenState: true
    })
  },
  halfScreenButtonTap () {
    this.setData({
      halfScreenState: false
    })
  }
})
