// components/w-goods/w-goods.js
Component({
  properties: {
    goods: {
      type: Object,
      value: {}
    }
  },
  data: {

  },
  methods: {
    goodsClick(e) {
      const id = this.data.goods.id;
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + id
      });
    }
  }
})
