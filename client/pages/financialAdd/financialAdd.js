// client/pages/financialAdd/financialAdd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['支出', '收入'],
    typeText: '',
    type: false,
    srcArray: ['政府补贴', '慈善公益', '修路'],
    srcText: '',
    src: false,
    jine: '',
    jingbanren: '',
    shuoming: ''
  },
  /**
   * 类型选择
   */
  bindPickerChangeOut(ev) {
    //console.log(ev.detail.value)
    this.setData({
      type: true,
      typeText: this.data.array[ev.detail.value]
    })
  },
  /**
   * 来源选择
   */
  bindPickerChangeSrc(ev) {
    this.setData({
      src: true,
      srcText: this.data.srcArray[ev.detail.value]
    })
  },
  /**
   * 金额
   */
  jine_input(ev) {
    //console.log(ev.detail.value)
    this.setData({
      jine: ev.detail.value
    })
  },

  /**
   * 经办人
   */
  jingbanren_input(ev) {
    //console.log(ev.detail.value)
    this.setData({
      jingbanren: ev.detail.value
    })
  },

  /**
   * 说明
   */
  shuoming_input(ev) {
    //console.log(ev.detail.value)
    this.setData({
      shuoming: ev.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  /**
   * 发送网络请求
   */
  add() {
    wx.showLoading({
      title: '正在加载...',
    })
    let that = this
    //网络请求
    wx.request({
      url: 'http://zzy.free.idcfengye.com/importMoneyMessage/true',
      method: 'GET',
      data: {
        'MoneyType': that.data.typeText,
        "MoneySouce": that.data.srcText,
        "Money": that.data.jine,
        "MoneyPeople": that.data.jingbanren,
        "MoneyUse": that.data.shuoming
      },
      header: {
        'content-type': 'application/json;charset=utf-8'
      },

      success(res) {
        //console.log(res.data)
        wx.hideLoading()
        wx.navigateBack()
      }
    })
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