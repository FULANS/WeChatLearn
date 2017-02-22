//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    items:[{
           'id':'xjsq',
           'name':'休假申请',
           'bageNum':'0',
           },
           {
           'id':'ccgl',
           'name':'出差管理',
           'bageNum':'0',
           },
           {
           'id':'bxd',
           'name':'报销单',
           'bageNum':'0',
           },
           {
           'id':'hygl',
           'name':'会议管理',
           'bageNum':'0',
           }
           ],
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    var thispage = this;
    this.upper();
  },
  
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    console.log('页面上拉触底事件')
  },

upper:function() {
  console.log('用户下拉动作')
}

})


