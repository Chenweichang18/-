// client/pages/addNotice/addnotice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startDate: '',
    endDate: '',
    fuzeren: '',
    didian: '',
    acitivy_content: ''
  },
  /**
   * 开始时间
   */
  bindDateStartChange(ev) {

    this.setData({
      startDate: ev.detail.value + " 00:00"
    })
  },
  /**
   * 结束时间
   */
  bindDateEndChange(ev) {

    this.setData({
      endDate: ev.detail.value + " 00:00"
    })
  },
  /**
   * 负责人
   */
  fuzeren_input(ev) {
    this.setData({
      fuzeren: ev.detail.value
    })
  },
  /**
   * 地点
   */
  didian_input(ev) {
    this.setData({
      didian: ev.detail.value
    })
  },

  /**
   * 活动内容
   */
  content_input(ev) {
    this.setData({
      acitivy_content: ev.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  /**
   * 请求网络
   */
  add(e) {
    wx.showLoading({
      title: '正在加载...',
    })
    var that = this
    //网络请求
    wx.request({
      url: 'http://zzy.free.idcfengye.com/importNoticeMessage/true',
      method: 'GET',
      data: {
        "NoticeName": '群众大会',
        "NoticeHum": that.data.fuzeren,
        "NoticeStarTime": that.data.startDate,
        "NoticeEndTime": that.data.endDate,
        "NoticeContent": that.data.acitivy_content,
        "NoticeLocation": that.data.didian
      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      success(res) {
        console.log(res.data)
        wx.hideLoading()
        wx.showToast({
          title: res.data,
        })
        wx.navigateBack()
      }

    })
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