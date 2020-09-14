Page({
  goBackPage () {
    wx.reLaunch({
      url: '/pages/lender/investInfo/investInfo',
    })
  },
  onShow () {
    wx.hideHomeButton({
      success: (res) => {},
    })
  }
})