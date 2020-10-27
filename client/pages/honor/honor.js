// client/pages/honor/honor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personageList: [],
    personageFlag: [],
    studentNum: [],
    studentList: [],
    studentFlag: [],
    current: 'personage',
    flag: [],
    lastIndex: 0,
    visible: true
  },
  /**
   * 名人榜
   */
  left() {
    this.setData({
      current: 'personage',
      flag: this.data.personageFlag
    })
  },
  /**
   * 大学生名单
   */
  right() {
    this.setData({
      current: 'student',
      flag: this.data.studentFlag
    })
  },
  scroll(e) {
    console.log(e)
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
   * 添加按钮
   */
  add() {
    wx.navigateTo({
      url: '/pages/enterPersonage/enterPersonage',
    })
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
    var that = this
    //名人榜
    wx.request({
      url: "http://zzy.free.idcfengye.com/Look1GloryMessage/true",
      method: 'GET',
      data: {
        "GloryType": '名人'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      success(res) {
        console.log(res.data)
        wx.hideLoading()
        var personageList = []
        for (var i = 0; i < res.data.length; i++) {

          personageList.push(res.data[i])
          that.data.personageFlag.push(false)

        }
        that.setData({
          personageList: personageList,
          flag: that.data.personageFlag
        })
      }
    })
    //大学生
    wx.request({
      url: "http://zzy.free.idcfengye.com/SelectschoolController/true",
      method: 'GET',
      data: {
        Time: 2020
      },
      header: {
        'content-type': 'application/json' // 默认值
      },

      success(res) {
        console.log(res.data)
        wx.hideLoading()
        var studentList = []
        var studentNum = [];
        for (var i = 0; i < res.data.length; i++) {
          if (i == 0) {
            studentNum.push(res.data[i])
            that.data.studentFlag.push(false)
          } else {
            studentList.push(res.data[i])
          }
        }
        that.setData({
          studentList: studentList,
          studentNum: studentNum
        })
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
    this.onLoad()
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