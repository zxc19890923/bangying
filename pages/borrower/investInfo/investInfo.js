Page({
  gotoInvestDetailPage (e) {
    let str = e.currentTarget.dataset.item
    wx.navigateTo({
      url: '/pages/borrower/investDetail/investDetail?item=' + str,
    })
  },
  onShow () {
    wx.hideHomeButton({
      success: (res) => {},
    })
  }
})