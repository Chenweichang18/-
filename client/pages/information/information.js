const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    type:''
  },
  //跳转登记详情
  tiaozhuan: function () {
    wx.navigateTo({
      url: '../register/register'
    })
  },


  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function (options) {
    var type = wx.getStorageSync("registered")
    this.setData({
      type:type
    })
    console.log(this.data.type)
  },



  /**
  
  * 生命周期函数--监听页面初次渲染完成
  
  */

  onReady: function () {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: '信息登记'
    })
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: '#1E90FF'
    })
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