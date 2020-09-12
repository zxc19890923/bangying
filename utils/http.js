module.exports = {
  http(url, method, params) {
    let token = 'token' // token
    let sign = 'sign' // 签名
    let data = {
      token,
      sign
    }
    // 整合自己传递的参数和token、sign
    if (params.data) {
      for (let key in params.data) {
        if (params.data[key] === null || params.data[key] === 'null') {
          delete params.data[key]
        }
      }
      data = {...data, ...params.data} // ...遍历数组
    }
    // 封装get、post请求。
    wx.request({
      url: url,
      method: method === 'post' ? 'post' : 'get',
      data,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        params.success && params.success(res.data)
      },
      fail(error) {
        params.fail && params.fail(error)
      }
    })
  }
}