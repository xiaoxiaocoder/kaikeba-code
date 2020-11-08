// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()

//     try {
//       const rest = await cloud.openapi.wxacode.getUnlimited({
//         scene: event.scene,
//         page: event.page
//       })
//       return result
//     } catch (error) {
//       console.log(error)
//       return error
//     }
// }
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.wxacode.getUnlimited({
      scene: event.scene,
      page: event.page
    })
    return result
  } catch (err) {
    return err
  }
}