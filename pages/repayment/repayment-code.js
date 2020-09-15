// pages/repayment/repayment-code.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    code: '',
    dialogShow: false,
    name: '',
    buttons: [{text: '取消'}, {text: '确定'}]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindKeyInput (e) {
    this.setData({
      code: e.detail.value
    })
  },
  nextFn () {
    this.setData({
      dialogShow: true
    })
  },
  bindNameKeyInput (e) {
    this.setData({
      name: e.detail.value
    })
  },
  tapDialogButton (e) {
    let type = e.detail.item.text
    if (type === '确定') {
      console.log(this.data.name)
    } else {
      this.setData({
        dialogShow: false
      })
    }
  }
})