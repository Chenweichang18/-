// client/pages/financialNotice/financialNotice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    outlayeList: [],
    outlayeFlag: [],
    incomeList: [],
    incomeFlag: [],
    current: 'outlaye',
    flag: [],
    lastIndex: 0,
    visible: true

  },
  /**
   * 支出
   */
  left() {
    this.setData({
      current: 'outlaye',
      flag: this.data.outlayeFlag
    })
  },
  /**
   * 收入
   */
  right() {
    this.setData({
      current: 'income',
      flag: this.data.incomeFlag
    })
  },
  /**
   * 左右滑动
   */
  scroll(ev) {
    console.log(ev)
  },
  /**
   * 项目点击
   */
  itemclick(ev) {
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
    let that = this
    //网络请求
    wx.request({
      url: 'http://zzy.free.idcfengye.com/LookMoneyMessage/true',
      method: 'GET',
      data: {
        'MoneyType': '支出'
      },
      header: {
        'content-type': 'application/json;charset=utf-8'
      },

      success(res) {
        //console.log(res.data)
        wx.hideLoading()
        var outlayeList = []
        var incomeList = []
        for (var i = 0; i < res.data.length; i++) {
          outlayeList.push(res.data[i])
          that.data.outlayeFlag.push(false)
        }
        that.setData({
          outlayeList: outlayeList,
          flag: that.data.outlayeFlag
        })
      }
    })
    wx.request({
      url: 'http://zzy.free.idcfengye.com/LookMoneyMessage/true',
      method: 'GET',
      data: {
        'MoneyType': '收入'
      },
      header: {
        'content-type': 'application/json;charset=utf-8'
      },

      success(res) {
        //onsole.log(res.data)
        wx.hideLoading()
        var outlayeList = []
        var incomeList = []
        for (var i = 0; i < res.data.length; i++) {
          incomeList.push(res.data[i])
          that.data.incomeFlag.push(false)
        }
        that.setData({
          incomeList: incomeList,
          flag: that.data.outlayeFlag
        })
      }
    })
  },
  /**
   * 添加按钮
   */
  add() {
    wx.navigateTo({
      url: '/pages/financialAdd/financialAdd',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.showLoading({
      title: '正在加载...',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.on
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