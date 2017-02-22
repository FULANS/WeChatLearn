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
           'bageNum':'5',
           },
           {
           'id':'ccgl',
           'name':'出差管理',
           'bageNum':'1',
           },
           {
           'id':'zyzj',
           'name':'重要证件及申请进度',
           'bageNum':'1',
           }
           ],
           
      
  },

  enterlistview:function(event) {
      var selectedIndex = event.currentTarget.id, list = this.data.items;
      var item = list[selectedIndex];
      console.log(item.name);
      var name = item.name;

      wx.navigateTo({
        url: '../list/list? titlename='+name,
        success: function(res){
         
        },
        fail: function() {
        },
        complete: function() {
        }
      })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs ? naviname='+this.data.titlename
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


