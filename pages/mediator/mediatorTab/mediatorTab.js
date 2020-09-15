// pages/lender/investTab/investTab.js
Page({
  data: {
    activeIndex: '0',
  },
  onShow () {
    wx.hideHomeButton({
      success: (res) => {},
    })
  },
  changeTab(e) {
    console.log(e, 'tab界面切换')
    this.setData({
      activeIndex: e.currentTarget.dataset.pm
    })
    // wx.navigateToMiniProgram({
    //   appId: 'wx383d463f0fb06872',
    //   envVersion: 'release',
    //   success(res) {
    //     console.log('success', res)
    //   }
    // })
  }
})