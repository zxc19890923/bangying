// pages/lender/deletePhone/deletePhone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: 15001209233,
    dialogShow: false,
    buttons: [{text: '取消'}, {text: '移除'}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: this.data.phone.toString()
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  deletePhone () {
    this.setData({
      dialogShow: true
    })
  },
  tapDialogButton (e) {
    console.log(e)
    this.setData({
      dialogShow: false
    })
    if (e.detail.index === 1) {
      wx.navigateBack({
        delta: 0,
      })
    }
  }
})