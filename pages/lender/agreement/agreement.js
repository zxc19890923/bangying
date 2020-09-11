Page({
  goBackPage () {
    wx.redirectTo({
      url: '/pages/lender/investInfo/investInfo',
    })
  },
  onReady () {
    wx.hideHomeButton({
      success: (res) => {},
    })
  }
})