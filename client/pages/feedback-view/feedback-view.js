const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    ellipsis: true,
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    list: [{ id: '1', name: '匿名', type: '未查阅', time: '2020-04-08', duanluo: '村里的水管爆掉了，卧槽，水淌得一路都是，村里的水管爆掉了，卧槽，水淌得一路都是，村里的水管爆掉了，卧槽，水淌得一路都是，' }, { id: '2', name: '欧阳锋', type: '未查阅', time: '2020-04-08', duanluo: '村里的水管爆掉了，卧槽，水淌得一路都是，村里的水管爆掉了，卧槽，水淌得一路都是，村里的水管爆掉了，卧槽，水淌得一路都是，' }, { id: '3', name: '匿名', type: '已查阅', time: '2020-04-08', duanluo: '村里的水管爆掉了，卧槽，水淌得一路都是，村里的水管爆掉了，卧槽，水淌得一路都是，村里的水管爆掉了，卧槽，水淌得一路都是，' }, { id: '4', name: '匿名', type: '已查阅', time: '2020-04-08', duanluo: '村里的水管爆掉了，卧槽，水淌得一路都是.' }],
    list3: [],
    username: ''
  },

  viewTiaozhuan: function () {
    wx.navigateTo({
      url: '../djsuccess/djsuccess'
    })
  },
  /**
    * 收起/展开按钮点击事件
    */
  /* ellipsis: function () {
    var value = !this.data.ellipsis;
    this.setData({
      ellipsis: value
    })
  },
 */

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  },

  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function () {
    var that = this;
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
  },



  /**
  
  * 生命周期函数--监听页面初次渲染完成
  
  */

  onReady: function () {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: '查看反馈'
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