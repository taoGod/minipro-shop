// components/w-tab-control/w-tab-control.js
Component({
  properties: {
    tabs: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    changeTab(e) {
      const index = e.currentTarget.dataset.index;
      const tab = e.currentTarget.dataset.tab;
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      });
      this.triggerEvent('change', { index, tab });
    },
    selectTabAtIndex(index) {
      this.setData({
        currentIndex: index
      });
    }
  }
})
