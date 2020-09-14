Page({
  goBackPage () {
    wx.reLaunch({
      url: '/pages/lender/investTab/investTab',
    })
  },
  onShow () {
    wx.hideHomeButton({
      success: (res) => {},
    })
  }
})