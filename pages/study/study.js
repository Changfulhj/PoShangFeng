// pages/study/study.js
const app = getApp();
const URL = app.globalData.URL;
import {
  homedata
} from '../../data/homedata.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myclasses: null,
    myclassesdata:[],
    URL
  },



  gotoViedo(e) {
    const cid = e.currentTarget.dataset.classId;
    console.log(cid);
    wx.navigateTo({
      url: '/pages/classstudy/classstudy?cid=' + cid,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var myclassesdata = homedata[2];
    console.log(myclassesdata);
    this.setData({
      myclassesdata
    })
    const username = app.globalData.username
    wx.request({
      url: URL + '/buied',
      method: 'GET',
      data: {
        username
      },
      success(res) {
        console.log(res);
        let temp = res.data;
        let myclasses = [];
        temp = temp.split(",");
        myclasses = temp;
        myclasses.forEach(function (item, index, arr) {
          if (item === "," || item==="" || item==="-1") {
            myclasses.splice(index, 1);
          }
        });
        console.log(myclasses);
        that.setData({
          myclasses
        })
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
    wx.showNavigationBarLoading();
    var that = this;
    const username = app.globalData.username
    wx.request({
      url: URL + '/buied',
      method: 'GET',
      data: {
        username
      },
      success(res) {
        console.log(res)
        let temp = res.data;
        let myclasses = [];
        temp = temp.split(",");
        myclasses = temp;
        myclasses.forEach(function (item, index, arr) {
          if (item === "," || item==="" || item === "-1") {
            myclasses.splice(index, 1);
          }
        });
        console.log(myclasses);
        that.setData({
          myclasses
        })
      }
    })
    wx.stopPullDownRefresh({
      success: (res) => {
        wx.showToast({
          title: '加载中',
          icon:'loading',
          duration:300
        })
        wx.hideNavigationBarLoading()
      },
    })
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