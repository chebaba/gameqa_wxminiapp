Page({
  data: {
    topics: [
      {
        title: "Q：如图所示，在这种无信号灯控制情况下，A车、B车、C车的通行权顺序是什么？",
        pic: "../../images/answer_5.jpg",
        items: [
          {name: 'a', value: 'B车、A车、C车'},
          {name: 'b', value: 'C车、A车、B车'},
          {name: 'c', value: 'A车、B车、C车'},
          {name: 'd', value: 'A车、C车、B车'},
        ],
        soft: 1,
        checked: -1,
        istrue: 0
      },
      {
        title: "Q：机动车仪表板上（如图所示）一直亮，表示发动机控制系统故障。",
        pic : "../../images/answer_8.jpg",
        items: [
          {name: 'a', value: '正确'},
          {name: 'b', value: '错误'},
          {name: 'c', value: '不知道'},
          {name: 'd', value: '不想问答'},
        ],
        soft: 2,
        checked: -1,
        istrue: 0
      },
      {
        title: "Q：机动车仪表板上（如图所示）亮时表示什么？",
        pic : "../../images/answer_9.jpg",
        items: [
          {name: 'a', value: '已开启前照灯近光'},
          {name: 'b', value: '已开启前雾灯'},
          {name: 'c', value: '已开启前照灯远光'},
          {name: 'd', value: '已开启后雾灯'},
        ],
        soft: 3,
        checked: -1,
        istrue: 0
      },
      {
        title: "Q：机动车仪表板上（如图所示）亮时表示什么？",
        pic : "../../images/answer_10.jpg",
        items: [
          {name: 'a', value: '疲劳驾驶'},
          {name: 'b', value: '酒后驾驶'},
          {name: 'c', value: '客车超员'},
          {name: 'd', value: '超速行驶'},
        ],
        soft: 4,
        checked: -1,
        istrue: 0
      },
      {
        title: "Q：某驾驶一辆中型客车（乘载27人）行至汤山镇王伏村壶南头路段，在上坡过程中，机动车发生后溜驶出路外坠入落差约80米的山崖，造成11人死亡、7人受伤请问徐某的主要违法行为是什么？",
        pic : "../../images/answer_14.jpg",
        items: [
          {name: 'a', value: '毛泽东'},
          {name: 'b', value: '邓小平'},
          {name: 'c', value: '孙中山'},
          {name: 'd', value: '慈禧'},
        ],
        soft: 5,
        checked: -1,
        istrue: 0
      },            
    ],
    curtopic:[],
    values:[]
  },
  onLoad: function(options) {
    var curpage = options.curpage
    if (curpage && (curpage>0 && curpage<6)) {
      curpage = parseInt(curpage)
      curpage += 1
      this.data.curtopic = this.data.topics[curpage-1]
      console.log('当前是第' + curpage + '页')
    } else {
      console.log('当前是第1页')
      this.data.curtopic = this.data.topics[0]
    }
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var curpage = this.data.curtopic.soft
    this.data.values[curpage] = e.detail.value
    var key = curpage.toString()
    var dataStorage = e.detail.value
    wx.setStorageSync(key, dataStorage)
    console.log('values: ', this.data.values)
  },
  nextPage: function(e) {
    var curpage = this.data.curtopic.soft
    var curvalue = this.data.values[curpage]
    if (curpage>0 && curpage <5 && curvalue) {
      console.log('当前是第'+curpage+'页, 已选答案'+curvalue)
      this.data.curtopic = this.data.topics[curpage-1]
      wx.navigateTo({
        url: 'new-page?curpage='+curpage
      })
    } else if(curpage===5){
      wx.redirectTo({
        url: '../result/result'
      })
    }
  },
  navigateBack: function (e) {
    wx.navigateBack()
  }
})