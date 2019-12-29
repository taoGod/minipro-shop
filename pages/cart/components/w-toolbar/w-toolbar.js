// pages/cart/components/w-toolbar/w-toolbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selected: {
      type: Boolean,
      value: true
    },
    price: {
      type: Number
    },
    counter: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    checkIconChange(e) {
      this.setData({
        selected: !e.detail.checked
      });
    }
  }
})
