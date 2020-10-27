const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    SexArray: ['男', '女'],index: 0,
    qaArray: ['不留守', '留守'], indexa: 0,
    qbArray: ['不空巢', '空巢'], indexb: 0,
    qcArray: ['不贫困', '贫困'], indexc: 0,
    getinput1: null,
    getinput3: null,
    getinput4: null,
    getinput5: null,
    getinput6: null,
  },
  getinput1: function (e) {//方法1
    this.data.getinput1 = e.detail.value;
  },
  getinput3: function (e) {//方法3
    this.data.getinput3 = e.detail.value;
  },
  getinput4: function (e) {//方法4
    this.data.getinput4 = e.detail.value;
  },
  getinput5: function (e) {//方法5
    this.data.getinput5 = e.detail.value;
  },
  getinput6: function (e) {//方法2
    this.data.getinput6 = e.detail.value;
  },
  pickChange: function (e) {
    this.setData({
      index: e.detail.value
    });
    console.log(this.data.SexArray[this.data.index]);
  },
  pickChangea: function (e) {
    this.setData({
      indexa: e.detail.value
    });
    console.log(this.data.qaArray[this.data.indexa]);
  },
  pickChangeb: function (e) {
    this.setData({
      indexb: e.detail.value
    });
    console.log(this.data.qbArray[this.data.indexb]);
  },
  pickChangec: function (e) {
    this.setData({
      indexc: e.detail.value
    });
    console.log(this.data.qcArray[this.data.indexc]);
  },

  //跳转登记详情
  queding: function () {
    var openid = wx.getStorageSync("openid")
    wx.request({
      url: 'http://zzy.free.idcfengye.com/importHumMessage/true',
      method: 'GET',
      data: {
        openid: openid,
        name: this.data.getinput1,
        sex: this.data.SexArray[this.data.index],
        age: this.data.getinput3,
        phone: this.data.getinput4,
        address: this.data.getinput5,
        town: '花都区',
        job: "游客",
        ifpoor: this.data.qaArray[this.data.indexa],
        ifset: this.data.qbArray[this.data.indexb],
        ifalone: this.data.qcArray[this.data.indexc],

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        /* 定义缓存表示该用户是否登记 */
        wx.setStorageSync("registered", 'true')
        console.log(res.data);
        wx.hideLoading()
        setTimeout(function () {
          wx.navigateTo({
            url: '../djsuccess/djsuccess'
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