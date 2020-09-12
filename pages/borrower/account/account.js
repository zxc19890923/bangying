// 银行卡号
const cardReg = /^([1-9]{1})(\d{15}|\d{18})$/
Page({
  data: {
    name: '',
    card: '',
    nameError: false,
    cardError: false,
    error: ''
  },
  onShow () {
    wx.hideHomeButton({
      success: (res) => {},
    })
  },
  formInputChange (pm) {
    if (pm.currentTarget.dataset.type === 'name') {
      this.setData({
        name: pm.detail.value
      })
      if (this.data.name) {
        this.setData({
          nameError: false
        })
      }
    }
    if (pm.currentTarget.dataset.type === 'card') {
      this.setData({
        card: pm.detail.value
      })
      if (cardReg.test(this.data.card)) {
        this.setData({
          cardError: false
        })
      }
    }
  },
  gotoInvestList () {
    if (this.data.name.length < 3 || this.data.name.length > 30) {
      this.setData({
        nameError: true,
        error: '数据格式错误'
      })
    }
    if (!(cardReg.test(this.data.card))) {
      this.setData({
        cardError: true,
        error: '数据格式错误'
      })
    }
    if (!this.data.nameError && !this.data.cardError) {
      this.setData({
        error: ''
      })
      wx.redirectTo({
        url: '/pages/lender/agreement/agreement'
      })
    }
  }
})