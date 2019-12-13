// pages/zhangzhenming/zhangzhenming.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mername:"张真铭",
    xingbie:true,
    color:"#FFFFFF",
    wenzi:"编辑资料",
    range: [{ value: "跆拳道" }, { value: "跆拳道" }, { value: "跆拳道" }, { value: "跆拳道" }
    ],
    range2: [{ value: "跆拳道" }, { value: "足球" }, { value: "跆拳道" }, { value: "跆拳道" }, { value: "足球" }, { value: "足球" }, { value: "足球" }, { value: "足球" }
    ]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    
    wx.setNavigationBarTitle({
      title: this.data.mername//页面标题为路由参数
    })
    
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#28A9FA'
    })
  
  },

  qunti: function (event) {

    // const number = event.target.id;//1或者2得到点击了按钮1或者按钮2 

    const url = "/pages/qunti/qunti";//得到页面url 

    wx.navigateTo({

      url: url,

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