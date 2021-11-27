// pages/classdetail/classdetail.js
var app = getApp();
const URL = app.globalData.URL;
import {homedata} from '../../data/homedata.js';


Page({
  /**
   * 页面的初始数据
   */
  data: {
    thisclassdata:{},
    collected:false,
    _cid:null,
    _classesconllected:{},
    iscost:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const thisclassdata = homedata[2][options.cid];
    this.data._cid = options.cid;
    const temp = wx.getStorageSync('class_collected')
    this.data._classesconllected = temp
    let thiscollected = temp[this.data._cid]

    if (thiscollected === undefined) {
      thiscollected = false
    }

    this.setData({
      thisclassdata,
      collected:thiscollected  //初始化的时候给收藏bool值
    })
  },


  onCollect:function(){
    const temp = this.data._classesconllected;
    const cid = this.data._cid;
    const username = app.globalData.username;
    wx.request({
      url: URL + "/collected",
      data:{
        username,
        collected:cid
      },
      method:"GET",
      success(res){
        console.log(res);
        if (res.data == "collectedOK"){
          console.log("收藏好了");
        }
        else if (res.data == "uncollectedOK"){
          console.log("取消好了");
        }
      }
    })

    temp[this.data._cid] = !this.data.collected
    this.setData({
      collected:this.data._classesconllected[this.data._cid]
    })
    
    wx.setStorageSync('class_collected',temp)
    wx.showToast({
      title: this.data.collected?"收藏成功":"取消收藏"
    })
  },

  purchase(){
    var that = this;
    const cid = this.data._cid;
    const username = app.globalData.username
    console.log(username)
    wx.request({
      url: URL + "/cost",
      method:'GET',
      data:{
        cid,
        username
      },
      success(res){
        console.log(res)
        if (res.data == "costOK"){
          wx.showToast({
            title: '购买成功！',
          })
          that.setData({
            iscost:true
          })

        }
        else {
          wx.showToast({
            title: '购买失败',
            icon:"error"
          })
        }
      }
    }
    )

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