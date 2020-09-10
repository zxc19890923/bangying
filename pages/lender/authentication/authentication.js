// 手机号码
const phoneReg = /^1[3|4|5|6|7|8]\d{9}$/
// 身份证
const idCardReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/
// 银行卡号
const cardReg = /^([1-9]{1})(\d{15}|\d{18})$/
Page({
  data: {
    currentTime: 60,
    time: '获取验证码',
    disabled: false,
    agreeState: false,
    phone: '',
    code: '',
    name: '',
    idCard: '',
    card: '',
    phoneError: false,
    codeError: false,
    nameError: false,
    idCardError: false,
    cardError: false
  },
  formInputChange (pm) {
    console.log(pm)
    if (pm.currentTarget.dataset.type === 'phone') {
      this.setData({
        phone: pm.detail.value
      })
      if (phoneReg.test(this.data.phone)) {
        this.setData({
          phoneError: false
        })
      }
    }
    if (pm.currentTarget.dataset.type === 'code') {
      this.setData({
        code: pm.detail.value
      })
      if (this.data.code) {
        this.setData({
          codeError: false
        })
      }
    }
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
    if (pm.currentTarget.dataset.type === 'idCard') {
      this.setData({
        idCard: pm.detail.value
      })
      if (idCardReg.test(this.data.idCard)) {
        this.setData({
          idCardError: false
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
    this.setData({
      error: '请检查输入格式'
    })
    if (this.data.agreeState === false) {
      return false
    }
    if (!(phoneReg.test(this.data.phone))) {
      this.setData({
        phoneError: true
      })
    }
    if (this.data.code.length !== 6) {
      this.setData({
        codeError: true
      })
    }
    if (this.data.name.length < 3 || this.data.name.length > 30) {
      this.setData({
        nameError: true
      })
    }
    if (!(idCardReg.test(this.data.idCard))) {
      this.setData({
        idCardError: true
      })
    }
    if (!(cardReg.test(this.data.card))) {
      this.setData({
        cardError: true
      })
    }
    if (!this.data.phoneError && !this.data.nameError && !this.data.codeError && !this.data.idCardError && !this.data.cardError) {
      this.setData({
        error: ''
      })
      wx.redirectTo({
        url: '/pages/lender/investInfo/investInfo'
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
  },
  // 协议
  gotoAgreementPage () {
    wx.navigateTo({
      url: '/pages/lender/agreement/agreement',
    })
  }
})