// pages/test03/test03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    treeList: {
      text: '第一单元',
      id: 0,
      nodes: [
        {
          text: '理财入门之基本经济指标与经济学原理',
          id: 1,
          nodes: [
            {
              text: '正确理解理财之理财就是理生活',
              id: 2,
              nodes: [
                {
                  text: '现金规划管理（上）',
                  id: 3,
                },
                {
                  text: '现金规划管理 （下）',
                  id: 4,
                },
              ]
            },
            {
              text: 'Child 2',
              id: 5,
            }
          ]
        },
        {
          text: 'Parent 2',
          id: 6,
          nodes: [
            {
              text: 'Child 1',
              id: 7,
            },
            {
              text: 'Child 2',
              id: 8,
            }
          ]
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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