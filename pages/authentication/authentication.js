Page({
  data: {
    currentTime: 60,
    time: '获取验证码',
    disabled: false,
    agreeState: false,
    error: ''
  },
  gotoAgreementPage () {
    wx.navigateTo({
      url: '/pages/agreement/agreement',
    })
  },
  gotoInvestList () {
    if (this.data.agreeState === false) {
      this.setData({
        error: '手机号码格式不正确'
      })
    } else {
      wx.redirectTo({
        url: '/pages/investInfo/investInfo',
      })
    }
  },
  // 倒计时获取手机验证码
  getCode (options) {
    let currentTime = this.data.currentTime;
    this.setData({
      time: currentTime + '秒',
      disabled: true
    })
    let interval = setInterval(() => {
      this.setData({
        time: (currentTime - 1) + '秒'
      })
      currentTime--;
      if (currentTime <= 0) {
        clearInterval(interval)
        this.setData({
          time: '重新获取',
          currentTime: 60,
          disabled: false
        })
      }
    }, 1000)
  },
  // 同意协议
  changeRadioValue (e) {
    console.log(e.currentTarget.dataset.state)
    this.setData({
      agreeState: !e.currentTarget.dataset.state
    })
  }
})