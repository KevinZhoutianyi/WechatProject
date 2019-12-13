// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNan: 0,
    isRenzheng: 0
  },
  shimingTap: function (event) {

    // const number = event.target.id;//1或者2得到点击了按钮1或者按钮2 

    const url = "/pages/shimingrenzheng/shimingrenzheng";//得到页面url 

    wx.navigateTo({

      url: url,

    })
  },
  qiyeTap: function (event) {

    // const number = event.target.id;//1或者2得到点击了按钮1或者按钮2 

    const url = "/pages/qiyerenzheng/qiyerenzheng";//得到页面url 

    wx.navigateTo({

      url: url,

    })
  },
  wodeTap: function (event) {

    // const number = event.target.id;//1或者2得到点击了按钮1或者按钮2 

    const url = "/pages/wodeqianbao/wodeqianbao";//得到页面url 

    wx.navigateTo({

      url: url,

    })
  },
  zhangdanTap: function (event) {

    // const number = event.target.id;//1或者2得到点击了按钮1或者按钮2 

    const url = "/pages/zhangdanmingxi/zhangdanmingxi";//得到页面url 

    wx.navigateTo({

      url: url,

    })
  },
  tixianTap: function (event) {

    // const number = event.target.id;//1或者2得到点击了按钮1或者按钮2 

    const url = "/pages/tixian/tixian";//得到页面url 

    wx.navigateTo({

      url: url,

    })
  },
  renwuTap: function (event) {

    // const number = event.target.id;//1或者2得到点击了按钮1或者按钮2 

    const url = "/pages/renwushensu/renwushensu";//得到页面url 

    wx.navigateTo({

      url: url,

    })
  },
  lianxiTap: function (event) {

    // const number = event.target.id;//1或者2得到点击了按钮1或者按钮2 

    const url = "/pages/lianxikefu/lianxikefu";//得到页面url 

    wx.navigateTo({

      url: url,

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