// pages/home/home.js
const app = getApp();
const URL = app.globalData.URL;
import {homedata} from '../../data/homedata.js';
import {reconmenddata} from '../../data/recomenddata.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    URL
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({nav1data:homedata[0]});
    this.setData({nav2data:homedata[1]});
    this.setData({reconmenddata});
  },

  ongoTodetail: function(event){
    console.log(event);
    const cid = event.currentTarget.dataset.classId
    wx.navigateTo({
      url: '/pages/classdetail/classdetail?cid=' + cid
    })
  },

  jumpTos(){
    wx.switchTab({
      url: '/pages/allclasses/allclasses',
    })
  },

  jumpTod(e){
    console.log(e);
    wx.navigateTo({
      url: e.currentTarget.dataset.jumpsrc
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