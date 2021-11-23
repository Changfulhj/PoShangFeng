// pages/classstudy/classstudy.js
import {homedata} from '../../data/homedata.js';
const URL = "192.168.8.11:8080"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    currentVedio:null,
    thisclass:{},
    _cid:null,
    URL
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
    console.log(e)
    this.setData({
      currentVedio:e.currentTarget.dataset.viedoId
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _cid = options.cid;
    const thisclass = homedata[2][_cid];
    this.setData({
      thisclass,
      _cid,
      URL
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