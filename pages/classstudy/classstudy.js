// pages/classstudy/classstudy.js
import {homedata} from '../../data/homedata.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    currentVedio:1,
    thisviedo:{},
    cid:null
  },

  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  swiperTab: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },

  gotoviedo(e){
    console.log(e.currentTarget.dataset.viedoId);
    this.setData({
      currentVedio:e.currentTarget.dataset.viedoId
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(homedata);
    const thisviedo = homedata[2][0];
    this.setData({
      thisviedo
    }),
    console.log(this.data.thisviedo);
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