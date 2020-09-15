// pages/lender/investTab/investTab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 1,
    list: [{
      "text": "切换身份",
      "iconPath": "/pages/images/change.png",
      "selectedIconPath": "/pages/images/change_active.png"
    },
    {
      "text": "我的账单",
      "iconPath": "/pages/images/money_icon.png",
      "selectedIconPath": "/pages/images/money_active.png"
    },
    {
      "text": "我的",
      "iconPath": "/pages/images/user_tab.png",
      "selectedIconPath": "/pages/images/user_tab_active.png"
    }]
  },
  tabChange(e) {
    console.log(e, 'tab界面切换', e.detail.index)
    this.setData({
      activeIndex: e.detail.index
    })
    wx.setNavigationBarTitle({
      title: e.detail.item.text
    })
    if (e.detail.index === 0) {
      wx.reLaunch({
        url: '/pages/lender/mediation/mediation',
      })
    }
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
  onShow () {
    wx.hideHomeButton({
      success: (res) => {},
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

  }
})