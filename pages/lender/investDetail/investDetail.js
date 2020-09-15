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
  },
  gotoAgreePage () {
    wx.navigateTo({
      url: '/pages/lender/platform/platform',
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
