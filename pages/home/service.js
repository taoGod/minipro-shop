import request from '../../common/http.js'

export function getMultiData() {
  return new Promise((resolve, reject) => {
    const res = {
      success: true,
      data: {
        banner: {
          list: [
            { image: '/assets/images/banner/banner1.jpg' },
            { image: '/assets/images/banner/banner2.jpg' },
            { image: '/assets/images/banner/banner3.jpg' },
            { image: '/assets/images/banner/banner4.jpg' }
          ]
        },
        recommend: {
          list: [
            { title: '十点抢券', image: '/assets/images/recommend/recommend1.png' },
            { title: '好物特卖', image: '/assets/images/recommend/recommend2.png' },
            { title: '内购福利', image: '/assets/images/recommend/recommend3.png' },
            { title: '年终特惠', image: '/assets/images/recommend/recommend4.png' }
          ]
        }
      }
    };
    resolve(res);
  });
  // return request({
  //   url: '/home/multidata',
  //   method: 'GET'
  // })
}

export function getGoodsList(type, page) {
  return new Promise((resolve, reject) => {
    const res = {
      success: true,
      data: { list: [] }
    };
    let title = '';
    if (type === 'pop') {
      title = '流行';
    } else if (type === 'new') {
      title = '新款';
    } else if (type === 'sell') {
      title = '热卖';
    }
    for (let i = 0; i < 10; i++) {
      // 随机一个 1 ~ 25 的整数
      const randomIndex = Math.floor(Math.random() * (25 - 1) + 1);
      res.data.list.push({
        id: type + page + '/' + i,
        title: title + page + '/' + i + '秋冬女装套装时尚三件套短款连帽棉服女外套百搭针织衫显瘦牛仔裤',
        image: '/assets/images/goods/goods' + randomIndex + '.jpg',
        price: randomIndex + 2 + '.00',
        cfav: randomIndex + '.00'
      });
    }
    resolve(res);
  });
  // return request({
  //   url: '/home/data',
  //   data: {
  //     type,
  //     page
  //   }
  // })
}