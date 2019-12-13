// pages/sousuojieguo/sousuojieguo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
      array1: ['体验官', '志愿招募', '宣传员'],
    array2: ['达人老师', '专技人员', '公益天使'],
    array3: ['体育活动', '文化娱乐', '社区交友', '表演竞赛'],
      
    index1: 0,
    index2: 0,
    index3: 0,
    defaultValue1: "宣传体验",
    defaultValue2: "志愿招募",
    defaultValue3: "社交活动"
  },

  tap: function (event) {

    // const number = event.target.id;//1或者2得到点击了按钮1或者按钮2 

    const url = "/pages/yuelao/yuelao";//得到页面url 

    wx.navigateTo({

      url: url,

    })
  },
 

  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let array = this.data.array1
    let index = e.detail.value
    this.setData({
      
      defaultValue1:array[index]
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let array = this.data.array2
    let index = e.detail.value
    this.setData({

      defaultValue2: array[index]
    })
  },
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    let array = this.data.array3
    let index = e.detail.value
    this.setData({

      defaultValue3: array[index]
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