// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg:[
      {src:"/images/banner.png"},
      { src: "/images/banner.png"},
      { src: "/images/banner.png"}
    ],
    
    currentTab: 0,
  },
  tap2: function (event) {

    // const number = event.target.id;//1或者2得到点击了按钮1或者按钮2 

    const url = "/pages/huodongfabu/huodongfabu";//得到页面url 

    wx.navigateTo({

      url: url,

    })
  },
  tap: function (event) {

    // const number = event.target.id;//1或者2得到点击了按钮1或者按钮2 

    const url = "/pages/yuelao/yuelao";//得到页面url 

    wx.navigateTo({

      url: url,

    })
  },
  bindInput: function (e) {
    // this.setData({
    //   inputValue: e.detail.value
    // })

    wx.navigateTo({
      url: '../sousuo/sousuo'
    })
  },



  swichNav: function (e) {

    console.log(e);

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {

      return false;

    } else {

      that.setData({

        currentTab: e.target.dataset.current,

      })

    }

  },

  swiperChange: function (e) {

    console.log(e);

    this.setData({

      currentTab: e.detail.current,

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