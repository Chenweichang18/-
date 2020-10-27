const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    name:'',
    shuoming:'',
    date: '',
    time: '',
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  getinput1: function (e) {
    this.setData({
      name: e.detail.value
    });
  },
  getinput3: function (e) {
    this.setData({
      shuoming: e.detail.value
    });
  },
  tiaozhuan: function (e) {
    var that = this
    if(this.data.name!=''&&this.data.shuoming!=''){
      wx.request({
        url: 'http://zzy.free.idcfengye.com/importVoteMessage/true',
        method: 'GET',
        data: {
          Elcationname:this.data.name,
          EndTime: this.data.date + ' ' + this.data.time,
          ElcationExplain: this.data.shuoming,
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log("success")
        }
      })

    wx.showToast({
      title: '添加成功',
      
    })
    setTimeout(()=>{
      wx.navigateBack({
        delta: 1
      })
    },2000)
    }
  },
  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function (options) {
    var d=new Date();
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const day = d.getDate()
    const hour = d.getHours()
    const minute = d.getMinutes()
    const second = d.getSeconds()
    this.setData({
      date:year+'-'+month+'-'+day,
      time:hour+':'+minute
    })
  },



  /**
  
  * 生命周期函数--监听页面初次渲染完成
  
  */

  onReady: function () {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: '选举录入'
    })
    wx.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: '#fe6c6c'
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