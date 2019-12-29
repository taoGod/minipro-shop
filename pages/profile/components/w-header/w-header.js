// pages/profile/components/w-header/w-header.js
Component({
  properties: {
    avatar: {
      type: String,
      value: '/assets/images/profile/avatar.png'
    },
    username: {
      type: String,
      value: '今非忄西比丶'
    }
  },
  data: {

  },
  methods: {
    goSummary(e) {
      wx.navigateTo({
        url: '/pages/summary/summary'
      });
    }
  }
})
