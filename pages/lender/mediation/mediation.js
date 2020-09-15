Page({
  gotoAuthenticationPage (e) {
    console.log(e)
    if (e.currentTarget.dataset.pm === '1') {
      wx.navigateTo({
        url: '/pages/lender/authentication/authentication',
      })
    } else if (e.currentTarget.dataset.pm === '2') {
      wx.navigateTo({
        url: '/pages/borrower/authentication/authentication'
      })
    } else if (e.currentTarget.dataset.pm === '3') {
      wx.navigateTo({
        url: '/pages/lender/mediator/mediator'
      }) 
    } else if (e.currentTarget.dataset.pm === '4') {
      wx.navigateTo({
        url: '/pages/repayment/repayment-code'
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
  onLoad () {},
  onShow () {
    wx.hideHomeButton({
      success: (res) => {},
    })
  }
})