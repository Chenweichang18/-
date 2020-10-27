const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    tt:'',
    SexArray: ['男', '女'],index: 0,
    qaArray: ['群众', '团员','党员'], indexa: 0,
    qbArray: ['村长', '副村长','村干部','书记'], indexb: 0,
    getinput1: null,
    getinput4: null,
    getinput5: null,
  },
  getinput1: function (e) {//方法1
    this.data.getinput1 = e.detail.value;
  },
  getinput4: function (e) {//方法4
    this.data.getinput4 = e.detail.value;
  },
  getinput5: function (e) {//方法5
    this.data.getinput5 = e.detail.value;
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

  queding: function () {
    wx.request({
      url: 'http://zzy.free.idcfengye.com/InsertVoteMessage2/true',
      method: 'GET',
      data: {
        VoteTitle:this.data.tt,
        VotePosition: this.data.qbArray[this.data.indexb],
        VoteName: this.data.getinput1,
        VoteNumber: 0,
        VoteSex: this.data.SexArray[this.data.index],
        VotePhone: this.data.getinput4,
        VoteFace: this.data.qaArray[this.data.indexa],
        VoteNote: this.data.getinput5

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        wx.showToast({
          title: '添加成功',
        })
        setTimeout(function () {
          wx.navigateBack({
            detail:1
          })
        }, 1000)
      },

    })
  },




  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function (options) {
    var that = this
    var i_t = options.t
    that.setData({
      tt:i_t
    })
  },



  /**
  
  * 生命周期函数--监听页面初次渲染完成
  
  */

  onReady: function () {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: '选举人信息录入'
    })
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: '#fe6c6c'
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