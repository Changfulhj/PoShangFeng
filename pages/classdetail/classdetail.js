// pages/classdetail/classdetail.js
import {homedata} from '../../data/homedata.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    thisclassdata : {},
    collected:false,
    _cid : null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const thisclassdata = homedata[2][options.cid];
    this.data._cid = options.cid;
    const class_collected = wx.getStorageSync('class_collected')
    const thiscollected = class_collected[this.data._cid]
    this.setData({
      thisclassdata,
      collected:thiscollected  //初始化的时候给收藏bool值
    })
  },


  onCollect:function(){
    const classcollected = {};
    classcollected[this.data._cid] = true;
    wx.setStorageSync('class_collected', classcollected);
    this.setData({
      collected:classcollected[this.data._cid]
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