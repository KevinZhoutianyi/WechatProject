// pages/sousuo/sousuo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lishijilu: [{ "data": "志愿者" }, { "data": "志愿者" }, { "data": "帮扶老人" }, { "data": "志愿者" }, { "data": "志愿者" }, { "data": "志愿者" }, { "data": "志愿者" }, { "data": "帮扶老人" }, { "data": "志愿者" }, { "data": "志愿者" }, { "data": "志愿者" }, { "data": "志帮扶老人愿者" }, { "data": "帮扶老人" }, { "data": "志愿者" }, { "data": "志愿者" }, { "data": "志愿者" }, { "data": "志愿者" }, { "data": "帮扶老人" }]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindInput: function (e) {
    // this.setData({
    //   inputValue: e.detail.value
    // })

    wx.navigateTo({
      url: '../sousuojieguo/sousuojieguo'
    })
  },
  tapFunction: function (e) {
    // this.setData({
    //   inputValue: e.detail.value
    // })

    wx.navigateTo({
      url: '../gengduosousuo/gengduosousuo'
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