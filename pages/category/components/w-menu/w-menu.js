// pages/category/components/w-menu/w-menu.js
Component({
  properties: {
    categories: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    changeCategory(e) {
      const index = e.currentTarget.dataset.index;
      const category = e.currentTarget.dataset.category;
      this.setData({
        currentIndex: index
      });
      this.triggerEvent('change', { category, index });
    }
  }
})
