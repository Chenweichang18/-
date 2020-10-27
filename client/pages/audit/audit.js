const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    list: [],
    list3: [],
    username: ''
  },

  viewTiaozhuan: function () {
    wx.navigateTo({
      url: '../djsuccess/djsuccess'
    })
  },
  
  /** 
       * 滑动切换tab 
       */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /** 
     * 点击tab切换 
     */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function () {
    var that=this;
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
    var y="已审核"
    var w = "未审核"
    wx.request({
      url: 'http://zzy.free.idcfengye.com/LookHumMessage/true?ifcheck=' + w,
      method: 'GET',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          list: res.data
        })
      }
    })
    wx.request({
      url: 'http://zzy.free.idcfengye.com/LookHumMessage/true?ifcheck='+ y,
      method: 'GET',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          list2: res.data
        })
      }
    })
  },



  /**
  
  * 生命周期函数--监听页面初次渲染完成
  
  */

  onReady: function () {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: '村民信息审核'
    })
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: '#3588ad'
    })
  },



  /**
  
  * 生命周期函数--监听页面显示
  
  */

  onShow: function () {
    this.onLoad();
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