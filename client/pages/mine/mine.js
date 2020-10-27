const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    allnum: 1500,
    pknum: 800,
    lsnum: 250,
    kcnum: 300,
    username: '去登录',
    zhiwei: '游客',
    url: '../images/ganbu.png',
    isLogin: false,
    information:[]
  },

  /**
   * 微信授权登录
   */
  wx_login(ev) {
    //console.log(ev, "==============")
    var url = ev.detail.userInfo.avatarUrl //头像
    var name = ev.detail.userInfo.nickName //微信名
    wx.setStorageSync("url", url)
    wx.setStorageSync("name", name)
    if (!wx.getStorageSync("islogin")) {
      let that = this
      that.setData({
        isLogin: true,
        url: url,
        username: name
      })
      //登录
      wx.login({
        success: function (res) {
          var code = res.code
          //console.log(code)
          wx.request({
            url: 'http://zzy.free.idcfengye.com/login/login',
            method: 'GET',
            data: {
              'code': code
            },
            header: {
              'content-type': 'application/json' // 默认值
            },

            success(res) {
              //console.log(res.data)
              wx.setStorageSync("openid", res.data.openid)
              wx.setStorageSync("islogin", true)
              that.onLoad()
            }

          })
        },
      })
    }
  },

  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function() {
    var c = 500;
    this.setData({
      changdu: c
    })
    var openid = wx.getStorageSync("openid")
    var that=this
    console.log(openid)
    if(openid!=""){
      wx.request({
        url: 'http://zzy.free.idcfengye.com/SerachHumMessage/true?openid=' + openid,
        method: 'GET',
        data: {
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log(res);
          that.setData({
            information: res.data,
            zhiwei: res.data[0].job
          })
          wx.setStorageSync("job",that.data.zhiwei)
        }
      })
      var url = wx.getStorageSync("url")
      var name = wx.getStorageSync("name")
      this.setData({
        url:url,
        username:name
      })
    }

  },
  xiugai: function() {
    wx.navigateTo({
      url: '../information-update/information-update'
    })
  },
  guanyu:function(){
    wx.navigateTo({
      url: '../about/about'
    })
  },
  shuoming: function () {
    wx.navigateTo({
      url: '../talk/talk'
    })
  },

  /**
  
  * 生命周期函数--监听页面初次渲染完成
  
  */

  onReady: function() {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: '我的'
    })
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