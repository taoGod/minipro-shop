// pages/home/home.js
import { BACK_TOP_POSITION } from '../../common/constant.js';
import { getMultiData, getGoodsList } from './service.js'

Page({
  data: {
    banners: [],
    recommends: [],
    tabs: [
      { label: '流行', id: 'pop' },
      { label: '新款', id: 'new' },
      { label: '精选', id: 'sell' }
    ],
    goodsTypes: {
      'pop': { page: 1, list: [] },
      'new': { page: 1, list: [] },
      'sell': { page: 1, list: [] },
    },
    currentType: 'pop',
    scrollTop: 0,
    tabControlTop: 0,
    tempTabControlDisplay: false,
    backTopDisplay: false
  },
  // ------------- 事件 -------------
  onLoad() {
    this.refreshData();
  },
  onShareAppMessage() {
    return {
      title: '今非忄西比丶',
      path: '/pages/home/home',
      success: (res) => {}
    }
  },
  onPullDownRefresh() {
    this.getGoodsList(this.data.currentType, true);
    setTimeout(wx.stopPullDownRefresh, 3000);
  },
  recommendImageLoad(e) {
    // wx.createSelectorQuery()
    //   .select('.tab-control')
    //   .boundingClientRect((rect) => {
    //     this.setData({
    //       tabControlTop: rect.top
    //     })
    //   })
    //   .exec();
  },
  tabChange(e) {
    const tab = e.detail.tab;
    this.setData({
      currentType: tab.id
    });
    this.selectComponent('.tab-control').selectTabAtIndex(e.detail.index);
    this.selectComponent('.tab-control-temp').selectTabAtIndex(e.detail.index);
  },
  scrollToLower(e) {
    this.loadMore();
  },
  viewDidScroll(e) {
    wx.createSelectorQuery().select('.tab-control').boundingClientRect((rect) => {
      this.setData({
        tempTabControlDisplay: rect.top <= 0
      })
    }).exec();

    const scrollTop = e.detail.scrollTop;
    this.setData({
      backTopDisplay: scrollTop >= BACK_TOP_POSITION
    });
  },
  backToTop(e) {
    this.setData({
      backTopDisplay: false,
      scrollTop: 0
    });
  },
  // ------------- 私有 -------------
  refreshData() {
    this.getMultiData();
    for (let key in this.data.goodsTypes) {
      this.getGoodsList(key, true);
    }
  },
  getMultiData() {
    getMultiData().then(res => {
      const { data, success } = res;
      if (success) {
        this.setData({
          banners: data.banner.list,
          recommends: data.recommend.list
        });
      }
    });
  },
  getGoodsList(type, refresh) {
    const page = refresh ? 1 : this.data.goodsTypes[type].page;
    getGoodsList(type, page).then(res => {
      const list = res.data.list;
      const goodsTypes = this.data.goodsTypes;
      if (refresh) {
        goodsTypes[type].list = list;
      } else {
        goodsTypes[type].list.push(...list);
      }
      goodsTypes[type].page += 1;
      this.setData({
        goodsTypes: goodsTypes
      });
    });
  },
  loadMore() {
    this.getGoodsList(this.data.currentType);
  }
})