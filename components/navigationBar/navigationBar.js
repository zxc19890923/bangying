const app = getApp()
Component({

  properties: {
    title: {
      type: String,
      value: 'Fatesinger'
    },
    back: {
      type: Boolean,
      value: false
    },
    home: {
      type: Boolean,
      value: false
    }
  },
  data: {
    statusBarHeight:20,
    toBarHeight:44
},

onLoad() {
  let _that=this;
    wx.getSystemInfo({
      success (res) {
        _that.globalData.statusBarHeight=res.statusBarHeight;
        if(res.platform=="ios"){
           _that.globalData.toBar=44;
        }else if(res.platform=="android"){
           _that.globalData.toBar=48;
        }else{
           _that.globalData.toBar=44;
        }
      }
    })
  this.setData({
    statusBarHeight: this.globalData.statusBarHeight,
    toBarHeight: this.globalData.toBar
  })
    
}
})