export function getNextAreaList(areaId) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'https://raw.githubusercontent.com/modood/Administrative-divisions-of-China/master/dist/pcas-code.json',//你的接口地址
       
        success(res) {

        let list = []
        for (let item of res.data) {
          list.push({
            id: item.id,//id对应地区ID
            name: item.name//name对应地区名称
          })
        }
        //成功回调 要确保数组中的对象有id和name字段
        resolve(list);

      },
      fail(err) {
        //失败回调
        reject(err)

      }

    })
  })
}