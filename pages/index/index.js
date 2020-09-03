//index.js
//获取应用实例, app.js中定义的所有数据，全局变量等。
const app = getApp()
console.log(app, '从微信拿到的数据')
// 导入封装接口
import http from '../../utils/api'
// 导入md5加密模块
import {md5} from '../../utils/md5'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    dialogShow: false,
    buttons: [{text: '取消'}, {text: '确定'}],
    time: '12:00',
    userInfoApi: {}
  },
  // 时间控件
  bindTimeChange (e) {
    console.log(e, '时间')
    this.setData({
      time: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  gotoEditor () {
    wx.navigateTo({
      url: '../editor/editor'
    })
    // this.setData({
    //   motto: '张旭超'
    // })
  },
  // 显示是否授权弹框
  openDialog () {
    this.setData({
      dialogShow: true
    })
  },
  // 弹框按钮被处罚
  tapDialogButton (e) {
    console.log(e)
    this.setData({
      dialogShow: false
    })
    if (e.detail.index === 0) {
      // 取消
      console.log('取消')
    } else {
      // 确定
      console.log('确定')
    }
  },
  onLoad: function () {
    // 调用接口，获取登录信息。
    http.getUserInfoApi(
      {
        data: {
          phone: '15001209233',
          pwd: md5('123456')
        },
        success: res => {
          console.log(res, '获取数据成功')
          this.setData({
            userInfoApi: res
          })
        }
      }
    )
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
