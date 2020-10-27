// client/pages/enterPersonage/enterPersonage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['名人榜', '大学生名单'],
    index: 0,
    nameList: [],
    mingdanList: [],
    showModal: false,
    name: '',
    content: ''
  },
  inputName(ev) {
    this.setData({
      name: ev.detail.value
    })
  },
  inputMingName(ev) {
    this.setData({
      name: ev.detail.value
    })
  },
  inputTextarea(ev) {
    this.setData({
      content: ev.detail.value
    })
  },
  submit: function() {
    if (this.data.name != '') {
      var mingdanList = this.data.mingdanList
      mingdanList.push(this.data.name)
      this.setData({
        mingdanList: mingdanList,
        showModal: false
      })
    } else {
      wx.showToast({
        title: '姓名不能为空',
      })
    }
  },

  preventTouchMove: function() {

  },


  cancel() {

    this.setData({
      showModal: false
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    console.log(JSON.stringify(that.data.name))
    //网络请求
    // wx.request({
    //   url: "http://zzy.free.idcfengye.com/ImportUniversityController/true",
    //   method: 'GET',
    //   data: {
    //     Gloryname: JSON.stringify(that.data.name),
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },

    //   success(res) {
    //     wx.hideLoading()
    //     console.log(res.data)
    //   }
    // })

  },
  bindPickerChange: function(e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 添加名单
   */
  add_xingming() {
    if (this.data.mingdanList.length < 9) {
      this.setData({
        showModal: true
      })
    } else {
      wx.showToast({
        title: '本次录入数量已上限',
      })
    }
  },

  /**
   * 发送网络请求
   */
  add() {
    wx.showLoading({
      title: '正在加载...',
    })
    var that = this
    if (that.data.index == 0) {
      //名人榜
      wx.request({
        url: "http://zzy.free.idcfengye.com/importGloryMessage/true",
        method: 'GET',
        data: {
          "GloryName": that.data.name,
          "GloryMessage": that.data.content,
          "GloryType": '名人',
          "GloryIdentity": '杰出青年',
          'GloryTime': '2020'
        },
        header: {
          'content-type': 'application/json' // 默认值
        },

        success(res) {
          wx.hideLoading()
          console.log(res.data)
          wx.navigateBack()
        }
      })
    } else if (that.data.index == 1) {
      //大学生
      wx.request({
        url: "http://zzy.free.idcfengye.com/ImportUniversityController/true",
        method: 'GET',
        data: {
          Gloryname: JSON.stringify(that.data.mingdanList),
        },
        header: {
          'content-type': 'application/json' // 默认值
        },

        success(res) {
          wx.hideLoading()
          console.log(res.data)
          wx.navigateBack()
        }
      })
    }
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