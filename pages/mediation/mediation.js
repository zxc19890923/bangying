Page({
  gotoAuthenticationPage (e) {
    console.log(e)
    if (e.currentTarget.dataset.pm === '1') {
      wx.navigateTo({
        url: '/pages/authentication/authentication',
      })
    } else {
      wx.navigateTo({
        url: '/pages/editor/editor'
      })
    }
  }
})