Page({
  onLoad (options) {
    // console.log(JSON.parse(options))
  },
  gotoAgreePage () {
    wx.navigateTo({
      url: '/pages/lender/platform/platform',
    })
  }
})
