const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    getinput1:null,
    getinput2:null,
  },
  getinput1: function (e) {//方法1
    this.data.getinput1 = e.detail.value;
  },
  getinput2: function (e) {//方法1
    this.data.getinput2 = e.detail.value;
  },
  tijiao:function(){
    var openid = wx.getStorageSync("openid")
    wx.request({
      url: 'http://zzy.free.idcfengye.com/importOpinionMessage/true',
      method: 'GET',
      data: {
        openid: openid,
        opinionName: this.data.getinput1,
        opinionContent: this.data.getinput2,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        wx.hideLoading()
        setTimeout(function () {
          wx.navigateTo({
            url: '../fksuccess/fksuccess'
          })
        }, 1000)
      },

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
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: '实名反馈'
    })
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: '#b64dcd'
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