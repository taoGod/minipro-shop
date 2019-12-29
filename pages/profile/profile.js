// pages/profile/profile.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    orderList: [
      { icon: 'message.png', label: '我的消息' },
      { icon: 'pointer.png', label: '积分商城' },
      { icon: 'vip.png', label: '会员卡' },
    ],
    serviceList: [
      { icon: 'cart.png', label: '我的购物车' },
      { icon: 'app.png', label: '下载购物APP' },
    ]
  },
  onLoad(options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      });
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo
          })
        }
      });
    }
  },
  onShareAppMessage() {
    return {
      title: '分享',
      path: '/pages/home/home',
      success: (res) => {}
    }
  }
})