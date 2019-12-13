// pages/huodongfabu/huodongfabu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array1: ['男', '女'],
    index1: 0,
     defaultValue1: "女",
     currentTab1:0,

    array2: ["5-10 周岁", "10-15 周岁", "15-20 周岁", "20-25 周岁", "25-30 周岁", "30-35 周岁", "35-40 周岁", "40-45 周岁", "45-50 周岁", "50-55 周岁", "55-60 周岁", "60-65 周岁", "65-70 周岁", "75-80 周岁", "80-85 周岁", "85-90 周岁", "90-95 周岁", "95-100 周岁", "大于100周岁"],
    index2:0,
    defaultValue2: "65-70 周岁",
    currentTab2:0,



    region:['','',''],
    custonItem: "全部"

  },

  bindPickerChange1: function (e) {

    let array = this.data.array1
    let index = e.detail.value
    this.setData({
      currentTab1: 1,
      defaultValue1: array[index]
    })
  }, 
  bindPickerChange2: function (e) {

    let array = this.data.array2
    let index = e.detail.value
    this.setData({
      currentTab2: 1,
      defaultValue2: array[index]
    })
  }, 
  bindPickerChange3: function (e) {

    let array = this.data.array2
    let index = e.detail.value
    this.setData({
      region:e.detail.value
    })
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