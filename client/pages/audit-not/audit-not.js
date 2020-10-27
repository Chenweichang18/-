const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    information:[],
  },

  //跳转登记详情
  jujue: function () {
    var pass1 = '未通过'
    var job='游客'
    var c = this.data.information[0].openid
    wx.showModal({
      title: '确定拒绝吗？',
      content: '此次操作将不允许此用户成为该村村民',
      confirmColor: '#fd7276',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'http://zzy.free.idcfengye.com/checkHumMessage/true?openid=' + c + '&pass=' + pass1 + '&job=' + job,
            method: 'GET',
            data: {
            },
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              wx.navigateTo({
                url: '../shsuccess/shsuccess'
              })
            }
          })


        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  tongguo: function () {
    var pass1='已通过'
    var job='村民'
    var c = this.data.information[0].openid
    wx.showModal({
      title: '确定通过吗？',
      content: '通过后此用户将成为该村村民',
      confirmColor: '#3588ad',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'http://zzy.free.idcfengye.com/checkHumMessage/true?openid=' + c + '&pass=' + pass1 + '&job=' + job,
            method: 'GET',
            data: {
            },
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              wx.navigateTo({
                url: '../shsuccess/shsuccess'
              })
            }
          })
          

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },




  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function (options) {
    var that = this;
    var i_openid = options.openid;
    console.log(i_openid)
    wx.request({
      url: 'http://zzy.free.idcfengye.com/SerachHumMessage/true?openid=' + i_openid ,
      method: 'GET',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          information: res.data
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
      title: '审核'
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