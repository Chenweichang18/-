const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    open:true,
    status:'',
    list:[
        /* { title:'第一届第一任委员选举大会',type:'进行中'},
        { title: '第二届第一任委员选举大会', type: '开始'} */
        ],
    job:''
  }, 
  find: function () {
    var that = this
    wx.request({
      url: 'http://zzy.free.idcfengye.com/SearchElcation/true',
      method: 'GET',
      data: {
        Title: this.data.getinput1
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          list: res.data
        })
      }
    })
  },
  findall: function () {
    var that = this
    if (this.data.open) {
      wx.request({
        url: 'http://zzy.free.idcfengye.com/SearchElcation/true',
        method: 'GET',
        data: {
          Title: ''
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          that.setData({
            list: res.data,
            open: false
          })
        }
      })
    }
    if (!this.data.open) {
      that.onShow()
      that.setData({
        open: true
      })
    }
  },
  start:function(e){
    wx.showModal({
      title: '确定开始吗？',
      content: '开始后将不可修改',
      cancelText: '取消',
      confirmText: '确定',
      success: (res) => {
        if (res.confirm) {
          
          const t = e.currentTarget.id
          const list = this.data.list
          for (let i = 0, len = list.length; i < len; i++) {
            if (list[i].elcationname == t) {
              console.log(list[i].elcationname+'已开始')
              wx.request({
                url: 'http://zzy.free.idcfengye.com/UpdateStatus/true',
                method: 'GET',
                data: {
                  Elcationname: list[i].elcationname,
                  Elstatus:'进行中'
                },
                header: {
                  'content-type': 'application/json'
                },
                success: function (res) {
                  console.log("success")
                    wx.showLoading({
                      title: '刷新中',
                    })
                    setTimeout(function () {
                      wx.hideLoading()
                    }, 1000)
                  
                }
              })
              this.onShow()
              /* wx.navigateTo({
                url: '../election/election'
              }); */
              break;
            }
            }
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  startError(){
    wx.showToast({
      title: '有大会进行中',
      image: '../images/error.png'
    })
  },
  end: function (e) {
    wx.showModal({
      title: '确定结束吗？',
      content: '结束后将不可修改',
      cancelText: '取消',
      confirmText: '确定',
      success: (res) => {
        if (res.confirm) {
          const t = e.currentTarget.id
          const list = this.data.list
          for (let i = 0, len = list.length; i < len; i++) {
            if (list[i].elcationname == t) {
              console.log(list[i].elcationname + '已结束')
              wx.request({
                url: 'http://zzy.free.idcfengye.com/UpdateStatus/true',
                method: 'GET',
                data: {
                  Elcationname: list[i].elcationname,
                  Elstatus: '已结束'
                },
                header: {
                  'content-type': 'application/json'
                },
                success: function (res) {
                  console.log("success")
                  wx.showLoading({
                    title: '刷新中',
                  })
                  setTimeout(function () {
                    wx.hideLoading()
                  }, 1000)

                }
              })
              //初始化投票数接口
              wx.request({
                url: 'http://zzy.free.idcfengye.com/initVoteSend/true',
                method: 'GET',
                data: {
                },
                header: {
                  'content-type': 'application/json'
                },
                success: function (res) {
                }
              })

              this.onShow()
              /* wx.navigateTo({
                url: '../election/election'
              }); */
              break;
            }
          }
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  tiaozhuan:function(){
      wx.navigateTo({
        url: '../theme/theme'
      })
    
  },
  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function (options) {
    var job = wx.getStorageSync("job")
    console.log('该页面为'+job + '(管理员)功能页面')
    this.setData({
      job:job
    })
  },



  /**
  
  * 生命周期函数--监听页面初次渲染完成
  
  */

  onReady: function () {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: '村干选举'
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
    /* this.onLoad(); */
    var that = this
    wx.request({
      url: 'http://zzy.free.idcfengye.com/lookElcationMessage/true',
      method: 'GET',
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          list: res.data
        })
        const list = res.data
        for (let i = 0, len = list.length; i < len; i++) {
          if (list[i].elstatus === '进行中') {
            that.setData({
              status:'进行中'
            })
          }
        }
      }
    })
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