// pages/category/components/w-content/w-content.js
import { BACK_TOP_POSITION } from '../../../../common/constant.js';

Component({
  properties: {
    goodslist: {
      type: Array
    }
  },
  data: {
    scrollTop: 0,
    backTopDisplay: false
  },
  methods: {
    viewDidScroll(e) {
      const scrollTop = e.detail.scrollTop;
      this.setData({
        backTopDisplay: scrollTop >= BACK_TOP_POSITION
      });
    },
    scrollToLower(e) {
      this.triggerEvent('contentScrollToLower');
    },
    backToTop(e) {
      this.setData({
        backTopDisplay: false,
        scrollTop: 0
      });
    }
  }
})
