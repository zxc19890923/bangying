Page({
  data: {
    payoff: true
  },
  onLoad (options) {
    let type = JSON.parse(options.item).type
    console.log(type)
    if (type === '2') {
      this.setData({
        payoff: false
      })
    }
  },
  // gotoAgreePage () {
  //   wx.navigateTo({
  //     url: '/pages/lender/platform/platform',
  //   })
  // },
  repaymentRecords () {
    wx.navigateTo({
      url: '/pages/borrower/repayment-records/repayment-records',
    })
  }
})
