const app = getApp()
Page({
  data: {
    userInfo: {}
  },
  gotoInvestDetailPage (e) {
    let str = JSON.stringify(e.currentTarget.dataset.item)
    console.log(str)
    wx.navigateTo({
      url: '/pages/lender/investDetail/investDetail?item=' + str,
    })
  },
  onReady () {
    wx.hideHomeButton({
      success: (res) => {},
    })
  },
  onLoad () {
    this.setData({
      userInfo: app.globalData.userInfo
    })
    console.log(app, '获取用户信息')
  },
  // 回退到首页选择角色界面
  onUnload () {
    wx.navigateBack({
      delta: 2,
    })
  }
})