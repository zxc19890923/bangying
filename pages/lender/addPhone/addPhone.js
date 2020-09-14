// 手机号码
const phoneReg = /^1[3|4|5|6|7|8]\d{9}$/
Page({
  data: {
    currentTime: 60,
    time: '获取验证码',
    disabled: false,
    phone: '',
    code: '',
    phoneError: false,
    codeError: false,
    error: ''
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
      if (this.data.code.length === 6) {
        this.setData({
          codeError: false
        })
      }
    }
  },
  gotoUserCenterPage () {
    if (!(phoneReg.test(this.data.phone))) {
      this.setData({
        phoneError: true,
        error: '数据格式错误'
      })
    }
    if (this.data.code.length !== 6) {
      this.setData({
        codeError: true,
        error: '数据格式错误'
      })
    }
    if (!this.data.phoneError && !this.data.codeError) {
      this.setData({
        error: ''
      })
      wx.navigateBack({
        delta: 0,
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
  }
})