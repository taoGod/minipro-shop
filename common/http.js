const baseURL = 'http://123.207.32.32:8000';
const timeout = 5000;

/**
 * 网络请求。
 * 
 * 对于 POST 方法且 header['content-type'] 为 application/json 的数据，会对数据进行 JSON 序列化
 * 
 * 对于 POST 方法且 header['content-type'] 为 application/x-www-form-urlencoded 的数据，会将数据转换成query string：
 * 
 * （encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
 * 
 */
function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      method: options.method || 'POST',
      url: baseURL + options.url,
      data: options.data,
      header: options.header || {
        'content-type': 'application/json'
      },
      timeout: options.timeout || timeout,
      success: function(res) {
        // res: data statusCode header
        resolve(res.data);
      },
      fail: reject
    })
  });
}

export default request;