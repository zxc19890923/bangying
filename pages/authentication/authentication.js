Page({
  data: {
    currentTime: 60,
    time: '获取验证码',
    disabled: false,
    agreeState: false,
    error: '',
    phone: '',
    code: '',
    name: '',
    idCard: '',
    card: ''
  },
  gotoAgreementPage () {
    wx.navigateTo({
      url: '/pages/agreement/agreement',
    })
  },
  formInputChange (pm) {
    console.log(pm)
    if (pm.currentTarget.dataset.type === 'phone') {
      this.setData({
        phone: pm.detail.value
      })
    }
    if (pm.currentTarget.dataset.type === 'code') {
      this.setData({
        code: pm.detail.value
      })
    }
    if (pm.currentTarget.dataset.type === 'name') {
      this.setData({
        name: pm.detail.value
      })
    }
    if (pm.currentTarget.dataset.type === 'idCard') {
      this.setData({
        idCard: pm.detail.value
      })
    }
    if (pm.currentTarget.dataset.type === 'card') {
      this.setData({
        card: pm.detail.value
      })
    }
  },
  gotoInvestList () {
    // 手机号码
    let phoneReg = /^1[3|4|5|6|7|8]\d{9}$/
    // 身份证
    let idCardReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/
    // 银行卡号
    let cardReg = /^([1-9]{1})(\d{15}|\d{18})$/
    if (this.data.agreeState === false) {
    } else if (!(phoneReg.test(this.data.phone))) {
      this.setData({
        error: '手机号码格式不正确'
      })
    } else if (this.data.code === '') {
      this.setData({
        error: '验证码不正确'
      })
    } else if (this.data.name === '') {
      this.setData({
        error: '姓名格式不正确'
      })
    } else if (!(idCardReg.test(this.data.idCard))) {
      this.setData({
        error: '身份证号码不正确'
      })
    } else if (!(cardReg.test(this.data.card))) {
      this.setData({
        error: '银行卡格式不正确'
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