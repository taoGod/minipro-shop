import request from '../../common/http.js'

export function getCategory() {
  return new Promise((resolve, reject) => {
    const res = {
      success: true,
      data: {
        category: {
          list: [
            { id: 1, label: '夏装折扣' },
            { id: 2, label: '春装折扣' },
            { id: 3, label: '羽绒服' },
            { id: 4, label: '夹克' },
            { id: 5, label: '大衣/风衣' },
            { id: 6, label: '棉服' },
            { id: 7, label: '卫衣' },
            { id: 8, label: '毛衫' },
            { id: 9, label: '寸衫' },
            { id: 10, label: '休闲裤' },
            { id: 11, label: '牛仔裤' },
            { id: 12, label: 'POLO' },
            { id: 13, label: '西装西裤' }
          ]
        }
      }
    };
    resolve(res);
  });
}

export function getGoodsList(category, page) {
  return new Promise((resolve, reject) => {
    const res = {
      success: true,
      data: { list: [] }
    };
    let title = category.label;
    for (let i = 0; i < 10; i++) {
      // 随机一个 1 ~ 25 的整数
      const randomIndex = Math.floor(Math.random() * (25 - 1) + 1);
      res.data.list.push({
        id: category.id + '/' + page + '/' + i,
        title: title + page + '/' + i + '秋冬女装套装时尚三件套短款连帽棉服女外套百搭针织衫显瘦牛仔裤',
        image: '/assets/images/goods/goods' + randomIndex + '.jpg',
        price: randomIndex + 2 + '.00',
        cfav: randomIndex + '.00'
      });
    }
    resolve(res);
  });
}