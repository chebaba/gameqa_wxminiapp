Page({
  data: {
    logs: [],
    answers: ['c','a','a','c','d'],
    score: 0,
    correct: 0,
    wrong: 0,
    resultimgsrc: ''
  },
  onLoad: function(options) {
    //console.log('getStorage: ', wx.getStorageSync('1'))
    var temp = 0
    for(var i=1;i<=5;i++){
      var key = i.toString()
      var ans = wx.getStorageSync(key)
      if (ans == this.data.answers[i-1]){
        temp++
      }
    }
    var score = temp*20
    this.data.score = score
    this.data.correct = temp
    this.data.wrong = 5 - temp
    var imgsrc = ''
    if (score < 40) {
      imgsrc = '../../images/answer_result_1.png'
    } else if (score >= 40 && score <= 80) {
      imgsrc = '../../images/answer_result_2.png'          
    } else {
      imgsrc = '../../images/answer_result_3.png'
    }
    this.data.resultimgsrc = imgsrc
  },
  goHome: function(e){
    wx.clearStorage()
    wx.redirectTo({url: '../home/home'})
  }
})