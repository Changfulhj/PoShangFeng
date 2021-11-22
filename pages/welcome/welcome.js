//index.js
//获取应用实例
const app = getApp()
 
Page({
  data: {
    username: '',
    password: ''
  },
  //事件处理函数

  onShow: function () {
    // 生命周期函数--监听页面显示
  },
  onLoad: function () {
    
  },
 
 
  // 获取输入账号 
  usernameInput: function (e) {
    app.globalData.username = e.detail.value
    this.setData({
      username: e.detail.value
    })
  },
 
  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

 
  //注册处理
  regin(e){
    var that = this;
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    }
    else {
      wx.request({
        url: 'http://192.168.8.110:8080/region',
        method:'get',
        data:{
          username:this.data.username,
          password:this.data.password
        },
        success(res){
          if (res.data == "regOK"){
            wx.showToast({
              title: '注册成功',
              icon:'success'
            })
          }
          else {
            console.log('账号已被使用')
          }
        },
        fail(res){
          wx.showToast({
            title: '网络连接失败',
          })
        }
      })
    }


  },

  // 登录处理
  login: function (e) {
    console.log(this.data.username)
    console.log(this.data.password)
    var that = this;
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } 
    else {
      wx.request({
        url: 'http://192.168.8.110:8080/login',
        method: 'get',
        data: {
          username: that.data.username,
          password: that.data.password
        },
        success(res) {
          console.log(res)
          if (res.data == "AlogOK") {
            // var unitName = res.data.data.User.unitName;
            // var unitId = res.data.data.User.unitId;
            // wx.setStorageSync('unitId', unitId);
            // wx.setStorageSync('unitName', unitName);
            wx.switchTab({
              url: '/pages/home/home'
            }),
            wx.showToast({
              title: '登录成功',
              icon:'success',
              duration:'3000'
            })
          } else {
            wx.showToast({
              title: '登录失败',
              icon: 'error',
              duration: 2000
            })
          }
        }
      })
    }
  }
})
 