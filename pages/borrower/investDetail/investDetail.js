Page({
  data: {
    payoff: true,
    buttons: [
      {
        type: 'primary',
        className: '',
        text: '主操作',
        value: 1
      }
    ],
    showDialog: false
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
  },
  openDialog () {
    this.setData({
      showDialog: true
    })
  },
  buttontap () {
    this.setData({
      showDialog: false
    })
  }
})
