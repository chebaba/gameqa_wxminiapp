// 拿到全局应用程序实例
const app = getApp()

Page({
  data: {
    list: [],
    loading: true
  },
  start() {
  	wx.redirectTo({url: '../new-page/new-page'})
  }
})