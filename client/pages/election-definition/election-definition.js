const app = getApp()
Page({



  /**
  
  * 页面的初始数据
  
  */

  data: {

    showModal: false,
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['村长', '副村长', '村干部', '书记'],//下拉列表的数据
    index: 0,//选择的下拉列表下标
    position:'',
    num:'',
    i_name:'',
    i_explain:'',
    i_TownHead: '',
    i_Governor: '',
    i_Towncad:'',
    i_Secretary:'',
    ing:'',
    /* list:{ title: '第一届第一任委员选举大会', explain:'本次大会选举出3名村干部，1名村长，1名村书记，点击下方即可投票，请大家公正投票'}, */
    list2:[
      /* { position: '村长',num:'1'},
      { position: '村干部',num:'3' },
      { position: '村书记',num:'1' } */

    ]
        
  }, 
  /**
   * 弹窗
   */
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },

  inputChange1: function (e) {
    this.setData({
      position: e.detail.value
    });
  },
  inputChange2: function (e) {
    this.setData({
      num: e.detail.value
    });
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    /* 加循环避免重复：this.data.position输出重复 */
    if(this.data.num!=''){
      var c = { position: this.data.selectData[this.data.index], num: this.data.num}
    this.data.list2.push(c)
    this.hideModal();
    this.setData({
      list2:this.data.list2
    })
    /* 数组去重 */
      var result = [];
      var obj = {};
      var l = this.data.list2
      for (var i = 0; i < l.length; i++) {
        if (!obj[l[i].position]) {
          result.push(l[i]);
          obj[l[i].position] = true;
        }
      } 
      this.setData({
        list2: result
      })
      if (this.data.selectData[this.data.index]=='村长')
      {
        this.data.selectData[this.data.index] = 'TownHead'
      }
      if (this.data.selectData[this.data.index] == '副村长') {
        this.data.selectData[this.data.index] = 'governor'
      }
      if (this.data.selectData[this.data.index] == '村干部') {
        this.data.selectData[this.data.index] = 'Towncad'
      }
      if (this.data.selectData[this.data.index] == '书记') {
        this.data.selectData[this.data.index] = 'Secretary'
      }
    /* 接口调用添加职位消息，传给后端 */
      wx.request({
        url: 'http://zzy.free.idcfengye.com/AddElcaion/true',
        method: 'GET',
        data: {
          Elcationname: this.data.i_name,
          job: this.data.selectData[this.data.index],
          number: this.data.num
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log("success")
        }
      })
      /* 添加或者修改弹窗判断 */
      if (this.data.i_TownHead!='0'){
      wx.showToast({
        title: '修改成功',
      })
      }
      else
          wx.showToast({
            title: '添加成功',
          })
      if (this.data.i_governor != '0') {
        wx.showToast({
          title: '修改成功',
        })
      }
      else
        wx.showToast({
          title: '添加成功',
        })
      if (this.data.i_Towncad != '0') {
        wx.showToast({
          title: '修改成功',
        })
      }
      else
        wx.showToast({
          title: '添加成功',
        })
      if (this.data.i_Secretary != '0') {
        wx.showToast({
          title: '修改成功',
        })
      }
      else
        wx.showToast({
          title: '添加成功',
        })
      
    
    }
    if (this.data.num == '') {
    wx.showToast({
      title: '请勿输入空白数据',
      image:'../images/error.png'
    })
  }
  },
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });

  },
  /**
  
  * 生命周期函数--监听页面加载
  
  */

  onLoad: function (options) {
    var that = this;
    that.setData({
      i_name : options.name,
      i_explain : options.explain,
      i_TownHead: options.TownHead,
      i_Governor: options.Governor,
      i_Towncad: options.Towncad,
      i_Secretary: options.Secretary,
      ing:options.ing,
    })
    console.log('村长个数：' + this.data.i_TownHead)
    console.log('副村长个数：' + this.data.i_Governor)
    console.log('村干部个数：' + this.data.i_Towncad)
    console.log('书记个数：' + this.data.i_Secretary)
    console.log(this.data.ing)
    if (this.data.i_TownHead!=0)
    {
      this.data.list2.push({ position: '村长', num: this.data.i_TownHead})
      that.setData({
        list2:this.data.list2
      })
    }
    if (this.data.i_Governor != 0) {
      this.data.list2.push({ position: '副村长', num: this.data.i_Governor })
      that.setData({
        list2: this.data.list2
      })
    }
    if (this.data.i_Towncad != 0) {
      this.data.list2.push({ position: '村干部', num: this.data.i_Towncad })
      that.setData({
        list2: this.data.list2
      })
    }
    if (this.data.i_Secretary != 0) {
      this.data.list2.push({ position: '书记', num: this.data.i_TownHead })
      that.setData({
        list2: this.data.list2
      })
    }
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