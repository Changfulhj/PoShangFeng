//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tt: ''
  },


  bindtest: function(options) {
    var that = this;
    wx.request({
      url: 'http://192.168.8.110:8080/Servlet', //本地服务器地址
      data: { //data中的参数值就是传递给后台的数据
        transInfo: '呐，这是小程序端给后台的数据'
      },
      method: 'get',
      header: {
        'content-type': 'application/json' //默认值
      },
      success: function(res) { //res就是接收后台返回的数据
        that.setData({
          tt: res.data
        })
        console.log(res)
        console.log(res.data);
      },
      fail: function(res) {
        console.log("失败");
      }
    })
  }


})
