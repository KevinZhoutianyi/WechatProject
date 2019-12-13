// pages/huodongfabu2/huodongfabu2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    on1 :0,
    date1: '2016-09-01',

    on2: 0,
    date2: '2016-09-01',

    on3: 0,
    date3: '2016-09-01',

    renshu1:0,
    on4:0,

    renshu2: 0,
    on5: 0,

    renshu3: 0,
    on6: 0,

    range1: ["0", "1", "2"],
    range2: ["0", "1", "2"],
    range3: ["0", "1", "2"],

  },
  bindDateChange1: function(e){

    this.setData({ date1: e.detail.value, 
    on1:1})
  },

  bindDateChange2: function (e) {

    this.setData({
      date2: e.detail.value,
      on2: 1
    })
  },

  bindDateChange3: function (e) {

    this.setData({
      date3: e.detail.value,
      on3: 1
    })
  },
  
  bindChange4: function (e) {
    this.setData({ renshu1: e.detail.value, on4: 1 })
  },

  bindChange5: function (e) {
    this.setData({ renshu2: e.detail.value, on5: 1 })
  },

  bindChange6: function (e) {
    this.setData({ renshu3: e.detail.value, on6: 1 })
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