// pages/zhangdanmingxi/zhangdanmingxi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    range: [
      { "wenzi": "支付宝提现500元", shuzi: "+10000", riqi: "2019-10-10", shijian: "10:00", zhuangtai: "处理中", color: "#FF0000" },
      { "wenzi": "微信提现500元", shuzi: "+10000", riqi: "2019-10-10", shijian: "10:00", zhuangtai: "成功", color: "#28A9FA" }

    ],

    range2: [
      { "wenzi": "支付宝提现500元", shuzi: "+10000", riqi: "2019-10-10", shijian: "10:00", zhuangtai: "", color: "#FF0000" },
      { "wenzi": "微信提现500元", shuzi: "+10000", riqi: "2019-10-10", shijian: "10:00", zhuangtai: "", color: "#28A9FA" }

    ]
,
    range3: [
      { "wenzi": "支付宝提现500元", shuzi: "+10000", riqi: "2019-10-10", shijian: "10:00", zhuangtai: "", color: "#FF0000" },
      { "wenzi": "微信提现500元", shuzi: "+10000", riqi: "2019-10-10", shijian: "10:00", zhuangtai: "", color: "#28A9FA" },
      { "wenzi": "微信提现500元", shuzi: "+10000", riqi: "2019-10-10", shijian: "10:00", zhuangtai: "", color: "#28A9FA" }

    ]
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