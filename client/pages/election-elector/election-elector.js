const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {
    tit:'',
    job:'',
    ing:'',
    openID:'00123',
    //第二个api用到的职位变量
    zhiwei:'',
    position:'',
    piaoshu:null,
    getinput1:'',
    list:[
          /* {name:'张正义',zhiwei:'村干部',xuanyan:'我要当村干部！希望大家支持我，我很强，我很几把强，我会成为最优秀的村干部，长江后浪推前浪，一代更比一代强！'},
      { name: '陈总', zhiwei: '村干部', xuanyan: '我要当村干部！希望大家支持我，我很强，我很几把强，我会成为最优秀的村干部，长江后浪推前浪，一代更比一代强！' } */
        ]
  }, 
  getinput1: function (e) {//方法1
    this.data.getinput1 = e.detail.value;
  },
  find: function () {
    var that = this
    wx.request({
      url: 'http://zzy.free.idcfengye.com/SearchVote/true',
      method: 'GET',
      data: {
        Title: this.data.tit,
        name: this.data.getinput1
        
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
  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].name === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
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
            if (list[i].title == t) {
              console.log(list[i].type)
              break;
              /* that.setData({
                currentTab: e.target.dataset.current
              }) */
            }
            }



        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  toupiao:function(e){
    //第一个api。传递openid用户标识。。。
    wx.request({
      url: 'http://zzy.free.idcfengye.com/InsertVoteSend/true',
      method: 'GET',
      data: {
        openid:this.data.openID
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log("one'api success")
      }
    })
    //第三个api，持有票数-1
    var that=this
    wx.request({
      url: 'http://zzy.free.idcfengye.com/UpdateVoteSned/true',
      method: 'GET',
      data: {
        openid: this.data.openID,
        job: this.data.zhiwei
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log("three'api success")
        that.piaoshutz()
      }
    })
    


    const t = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; i++) {
      if (list[i].voteName == t) {
        console.log(list[i].voteName)
        console.log(list[i].votePosition)
        console.log(this.data.tit)
        wx.request({
          url: 'http://zzy.free.idcfengye.com/VotePass/true',
          method: 'GET',
          data: {
            VoteTitle: this.data.tit,
            VotePosition: list[i].votePosition,
            VoteName: list[i].voteName
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log("success")
            wx.showToast({
              title: '投票成功',
            })
          }
      })
      }
    }
  },
  tiaozhuan:function(){
    wx.navigateTo({
      url: '../election-addelector/election-addelector'
    })
    
  },
  baocuo:function(){
    wx.showModal({
      title: '错误',
      content: '只有该村村民能投票',
    })
  },
  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function (options) {
    var job = wx.getStorageSync("job")
    var that=this
    var i_position = options.position
    var i_title=options.title
    that.setData({
      tit:i_title,
      zhiwei: i_position,
      ing:options.ing,
      job:job
    })
    console.log(this.data.job)
    console.log(i_title)
    console.log(this.data.ing)
    this.huoqu()
    this.piaoshutz()
    
  },
  //调用获取选举人列表的api
  huoqu:function(){
    var that=this
    wx.request({
      url: 'http://zzy.free.idcfengye.com/lookVoteMessage/true',
      method: 'GET',
      data: {
        Title: this.data.tit,
        job: this.data.zhiwei
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log("success")
        that.setData({
          list: res.data
        })
        console.log(that.data.list)
      }
    })
  },
  //第二个api，获取该用户在该职位所拥有的票数
  piaoshutz:function(){
    var that=this
    if (this.data.zhiwei == '村长') {
      this.data.zhiwei = 'Vote1'
    }
    if (this.data.zhiwei == '副村长') {
      this.data.zhiwei = 'Vote4'
    }
    if (this.data.zhiwei == '村干部') {
      this.data.zhiwei = 'Vote3'
    }
    if (this.data.zhiwei == '书记') {
      this.data.zhiwei = 'Vote2'
    }
    wx.request({
      url: 'http://zzy.free.idcfengye.com/SelectYourVote/true',
      method: 'GET',
      data: {
        openid: this.data.openID,
        job: this.data.zhiwei
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log("two'api success")
        that.setData({
          piaoshu: res.data
        })
        console.log('当前用户在该职位票选界面的剩余票数为：' + that.data.piaoshu)
      }
    })
  },


  /**
  
  * 生命周期函数--监听页面初次渲染完成
  
  */

  onReady: function () {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: '投票'
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