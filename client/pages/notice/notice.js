// client/pages/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noticeList: [],
    flag: [],
    lastIndex: 0,
    visible: true
  },
  /**
   * 点击列表展示效果
   */
  itemClick(ev) {
    //console.log(ev.currentTarget.dataset.index)
    var index = ev.currentTarget.dataset.index
    var flagIndex = this.data.flag[index]
    let completeStatus = `flag[${index}]`;
    if (!flagIndex) {
      let last = `flag[${this.data.lastIndex}]`;
      this.setData({
        [last]: false,
        [completeStatus]: true
      })
    } else {
      this.setData({
        [completeStatus]: false
      })
    }
    this.data.lastIndex = index; //上一次按的位置
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var job = wx.getStorageSync("job")
    if (job == '村干部') {
      this.setData({
        visible: false
      })
    }
    wx.showLoading({
      title: '正在加载...',
    })
  },
  /**
   *网络请求
   */
  request() {
    var that = this
    //网络请求
    wx.request({
      url: 'http://zzy.free.idcfengye.com/lookNoticeMessage/true',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },

      success(res) {
        console.log(res.data)
        wx.hideLoading()
        that.setData({
          noticeList: res.data
        })
        for (var i = 0; i < res.data.length; i++) {
          var p = false;
          that.data.flag.push(p)
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //Websocket通信
    // let socketOpen = false
    // let socketMsgQueue = ['我是小程序发送来的', '我是小程序发送来的', '我是小程序发送来的']
    // wx.connectSocket({
    //   url: 'ws://127.0.0.1:8080/websocket/cuncunxing'
    // })

    // wx.onSocketOpen(function(res) {
    //   socketOpen = true
    //   for (let i = 0; i < socketMsgQueue.length; i++) {
    //     sendSocketMessage(socketMsgQueue[i])
    //   }
    //   socketMsgQueue = []
    // })

    // function sendSocketMessage(msg) {
    //   if (socketOpen) {
    //     wx.sendSocketMessage({
    //       data: msg
    //     })
    //   } else {
    //     socketMsgQueue.push(msg)
    //   }
    // }
    // wx.onSocketMessage(function(res) {
    //   console.log(res)
    // })
  },
  /**
   * 添加按钮
   */
  add(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/addNotice/addnotice',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.request()
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