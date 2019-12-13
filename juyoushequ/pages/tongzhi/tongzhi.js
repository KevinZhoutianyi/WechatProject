// pages/tongzhi/tongzhi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    range: [
      { "biaoti": "最忆江南文明行", src:"/images/touxiang.png",nicheng: "张大姐", riqi: "2019-10-10", pinglun:"评论评论评论评论评论评论评论.."},
      { "biaoti": "任务名称", nicheng: "小兔子", src: "/images/touxiang.png",riqi: "2019-10-10", pinglun: "评论评内功内容内容呢论评论评论评论.."}

    ]
  },
  xitongxiaoxi: function (event) {

    // const number = event.target.id;//1或者2得到点击了按钮1或者按钮2 

    const url = "/pages/xitongxiaoxi/xitongxiaoxi";//得到页面url 

    wx.navigateTo({

      url: url,

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