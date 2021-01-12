export default {
  pages: [
    'pages/index/index',
    'pages/personal/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    list:[
      {
        pagePath:'pages/index/index',
        text:'发现'
      },
      {
        pagePath:'pages/personal/index',
        text:'我的'
      }
    ]
  }
}
