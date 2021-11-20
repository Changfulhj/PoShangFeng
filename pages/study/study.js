// pages/study/study.js
const URL = "http://192.168.8.110:8080/buied";
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  gotoViedo(){
    wx.navigateTo({
      url: '/pages/classstudy/classstudy',
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const username = app.globalData.username
    wx.request({
      url: URL,
      method:'GET',
      data:{
        username
      },
      success(res){
        console.log(res)
      }
    })
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