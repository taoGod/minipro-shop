// pages/cart/w-goods/w-goods.js
Component({
  properties: {
    goods: {
      type: Object,
      value: {}
    }
  },
  data: {
    checked: false
  },
  methods: {
    checkIconChange(e) {
      this.setData({
        checked: !e.detail.checked
      });
    }
  }
})
