Page({
  gotoAgreementPage () {
    wx.navigateTo({
      url: '/pages/agreement/agreement',
    })
  },
  gotoInvestList () {
    wx.redirectTo({
      url: '/pages/investInfo/investInfo',
    })
  }
})