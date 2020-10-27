const app = getApp()
Page({
  data: {
    "bnrUrl": [{
        "url": "../images/duanwu.png"
      }, {
        "url": "../images/zhong.png"
      },
    ],
    job:''
  },
  xjtiaozhuan: function() {
    var job = wx.getStorageSync("job")
    if(job=='村干部'){
      wx.navigateTo({
        url: '../election/election'
      })
    }
    if(job=='村民'||job=='游客'){
      wx.navigateTo({
        url: '../election-villager/election-villager'
      })
    }
    
  },
  cwtiaozhuan: function() {
    wx.navigateTo({
      url: '../financialNotice/financialNotice'
    })
  },
  //跳转信息登记
  xxtiaozhuan: function() {
    wx.navigateTo({
      url: '../information/information'
    })
  },
  cmtiaozhuan: function() {
    wx.navigateTo({
      url: '../audit/audit'
    })
  },
  fktiaozhuan: function() {
    var job = wx.getStorageSync("job")
    if (job == '村民' || job == '游客') {
    wx.navigateTo({
      url: '../feedback/feedback'
    })
    }
    if (job == '村干部') {
      wx.navigateTo({
        url: '../feedback-view/feedback-view'
      })
    }
  },
  grtiaozhuan: function() {
    wx.navigateTo({
      url: '../honor/honor'
    })
  },
  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function(options) {
    var openid = wx.getStorageSync("openid")
    var job = wx.getStorageSync("job")
    this.setData({
      job:job
    })
    console.log('该用户的唯一标识为：'+openid)
    console.log('该用户的职位（权限）为'+job)
  },



  /**
  
  * 生命周期函数--监听页面初次渲染完成
  
  */

  onReady: function() {

    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: '#fe5b5b'
    })
  },



  /**
  
  * 生命周期函数--监听页面显示
  
  */

  onShow: function() {
  },



  /**
  
  * 生命周期函数--监听页面隐藏
  
  */

  onHide: function() {

  },



  /**
  
  * 生命周期函数--监听页面卸载
  
  */

  onUnload: function() {

  },



  /**
  
  * 页面相关事件处理函数--监听用户下拉动作
  
  */

  onPullDownRefresh: function() {

  },



  /**
  
  * 页面上拉触底事件的处理函数
  
  */

  onReachBottom: function() {

  },



  /**
  
  * 用户点击右上角分享
  
  */

  onShareAppMessage: function() {

  }

})