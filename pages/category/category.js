// pages/category/category.js
import { getCategory, getGoodsList } from './service.js'

Page({
  data: {
    categories: [],
    currentIndex: 0
  },
  //---------- 事件 -------------
  onLoad(options) {
    this.getData()
  },
  categoryChange(e) {
    const index = e.detail.index;
    this.setData({
      currentIndex: index
    });
  },
  contentScrollToLower(e) {
    this.loadMore();
  },
  //---------- 私有 -------------
  getData() {
    this.getCategory()
  },
  getCategory() {
    getCategory().then(res => {
      const categories = res.data.category.list.map(category => {
        category.page = 1;
        category.goodslist = [];
        return category;
      });
      this.data.categories = categories;
      this.data.categories.forEach((category, index) => {
        this.getGoodsList(index, true);
      });
    })
  },
  getGoodsList(index, refresh) {
    const category = this.data.categories[index];
    const page = refresh ? 1 : this.data.categories[index].page;
    getGoodsList(category, page).then(res => {
      const list = res.data.list;
      if (refresh) {
        category.goodslist = list;
      } else {
        category.goodslist.push(...list);
      }
      category.page += 1;
      this.setData({
        categories: this.data.categories
      });
    });
  },
  loadMore() {
    this.getGoodsList(this.data.currentIndex);
  }
})