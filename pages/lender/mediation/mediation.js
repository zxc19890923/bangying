Page({
  gotoAuthenticationPage (e) {
    console.log(e)
    if (e.currentTarget.dataset.pm === '1') {
      wx.navigateTo({
        url: '/pages/lender/authentication/authentication',
      })
    } else {
      // wx.showToast({
      //   title: '成功',
      //   icon: 'success',
      //   duration: 2000,
      //   mask: true
      // })
      wx.showLoading({
        title: '加载中...',
        mask: false
      })
      setTimeout(() => {
        wx.hideLoading({
          success: (res) => {},
        })
      }, 3000)
    }
  },
  onLoad () {}
})