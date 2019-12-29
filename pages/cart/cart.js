// pages/cart/cart.js
Page({
  data: {
    isSelectAll: true,
    totalPrice: 1230,
    totalCounter: 6,
    goodslist: [
      {
        id: 1,
        title: '秋冬女装套装时尚三件套短款连帽棉服女外套百搭针织衫显瘦牛仔裤',
        desc: '秋冬女装套装时尚三件套短款连帽棉服女外套百搭针织衫显瘦牛仔裤',
        image: '/assets/images/goods/goods1.jpg',
        price: 36 + '.00',
        cfav: 64 + '.00',
        count: 3
      },
      {
        id: 1,
        title: '秋冬女装套装时尚三件套短款连帽棉服女外套百搭针织衫显瘦牛仔裤',
        desc: '秋冬女装套装时尚三件套短款连帽棉服女外套百搭针织衫显瘦牛仔裤',
        image: '/assets/images/goods/goods1.jpg',
        price: 36 + '.00',
        cfav: 64 + '.00',
        count: 3
      }
    ]
  },
  onLoad: function (options) {

  },
  onPullDownRefresh: function () {

  }
})