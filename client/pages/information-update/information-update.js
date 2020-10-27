const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    list: [], 
    SexArray: ['男', '女'],index: 0,
    qaArray: ['不留守', '留守'], indexa: 0,
    qbArray: ['不空巢', '空巢'], indexb: 0,
    qcArray: ['不贫困', '贫困'], indexc: 0,
    getinput1: null,
    getinput3: null,
    getinput4: null,
    getinput5: null,
    getinput6: null,
    sex:null,
  },
  getinput1: function (e) {//方法1
    this.data.getinput1 = e.detail.value;
  },
  getinput3: function (e) {//方法3
    this.data.getinput3 = e.detail.value;
  },
  getinput4: function (e) {//方法4
    this.data.getinput4 = e.detail.value;
  },
  getinput5: function (e) {//方法5
    this.data.getinput5 = e.detail.value;
  },
  getinput6: function (e) {//方法2
    this.data.getinput6 = e.detail.value;
  },
  pickChange: function (e) {
    this.setData({
      index: e.detail.value
    });

    console.log(this.data.SexArray[this.data.index]);
  },
  pickChangea: function (e) {
    this.setData({
      indexa: e.detail.value
    });
    console.log(this.data.qaArray[this.data.indexa]);
  },
  pickChangeb: function (e) {
    this.setData({
      indexb: e.detail.value
    });
    console.log(this.data.qbArray[this.data.indexb]);
  },
  pickChangec: function (e) {
    this.setData({
      indexc: e.detail.value
    });
    console.log(this.data.qcArray[this.data.indexc]);
  },

  queding: function () {
    var openid = wx.getStorageSync("openid")
    var job = wx.getStorageSync("job")
    wx.request({
      url: 'http://zzy.free.idcfengye.com/updateHumMessage/true',
      method: 'GET',
      data: {
        openid: openid,
        name: this.data.getinput1,
        sex: this.data.SexArray[this.data.index],
        age: this.data.getinput3,
        phone: this.data.getinput4,
        address: this.data.getinput5,
        town: this.data.getinput6,
        job: job,
        ifset: this.data.qaArray[this.data.indexa],
        ifalone: this.data.qbArray[this.data.indexb],
        ifpoor: this.data.qcArray[this.data.indexc],

      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.showToast({
          title: '修改成功',
          icon: '',     //默认值是success
          duration: 2000,      //停留时间
        })
        setTimeout(function () {
          wx.navigateBack({
            delta: 1
          })
        }, 1000)
       
      },

    })
  },




  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function (options) {
    var openid = wx.getStorageSync("openid")
    var that=this
    wx.request({
      url: 'http://zzy.free.idcfengye.com/SerachHumMessage/true?openid=' + openid,
      method: 'GET',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          list: res.data,
          getinput1:res.data[0].name,
          getinput3: res.data[0].age,
          getinput4: res.data[0].phone,
          getinput5: res.data[0].address,
          getinput6: res.data[0].town,
          sex:res.data[0].sex,
          
        })
      if(res.data[0].sex=='女')
      that.setData({
        index: 1
      })
      if (res.data[0].ifset == '留守')
        that.setData({
          indexa: 1
        })
      if (res.data[0].ifalone == '空巢')
        that.setData({
          indexb: 1
        })
      if (res.data[0].ifpoor == '贫困')
        that.setData({
          indexc: 1
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
      title: '修改个人信息'
    })
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: '#fd7276'
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