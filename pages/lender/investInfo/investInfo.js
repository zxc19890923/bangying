Page({
  gotoInvestDetailPage (e) {
    let str = JSON.stringify(e.currentTarget.dataset.item)
    console.log(str)
    wx.navigateTo({
      url: '/pages/lender/investDetail/investDetail?item=' + str,
    })
  },
  onShow () {
    wx.hideHomeButton({
      success: (res) => {},
    })
  }
})