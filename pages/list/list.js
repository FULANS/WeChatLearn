Page({
  data:{
    wfListArr:[
      {
        'name':'许佳',
        'node':'领导审批',
        'time':'2016-11-15 16:42',
        'content':'请审批休假申请, 申请人: 张海涛 , 工作交接给耿天涛'
      },
      {
        'name':'夏炎磊',
        'node':'部门经理审批',
        'time':'2016-11-15 16:42',
        'content':'请审批休假申请, 申请人: 王郑 , 休假2天'
      },
      {
        'name':'姚源',
        'node':'领导审批',
        'time':'2016-11-15 16:42',
        'content':'请审批休假申请, 申请人: 宋金峰 , 休假1天'
      },
    ],
    titlename:''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // 获取从上一个页面传过来的数据:
    // var name =  this.data.titlename;
    // var thispage = this;
    console.log('参数名字是:',+options.titlename),
    // thispage.setData({name:options.titlename})

      wx.setNavigationBarTitle({
        title: name,
        success: function(res) {
          // success
        }
      })
  },

  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})