import axios from 'axios'

// 创建一个错误
function errorCreate (msg) {
  const error = new Error(msg)
  throw error
}

// 创建一个 axios 实例

export function createService (baseURL = '/') {
  const service = axios.create({
    baseURL,
    timeout: 20000 // 请求超时时间
  })
// 响应拦截器
  service.interceptors.response.use(
    response => {
      // dataAxios 是 axios 返回数据中的 data
      const dataAxios = response.data
      // 这个状态码是和后端约定的
      const { code } = dataAxios
      // 根据 code 进行判断
      if (code === undefined) {
        // 如果没有 code 代表这不是项目后端开发的接口 比如可能是 D2Admin 请求最新版本
        return dataAxios
      } else {
        // 有 code 代表这是一个后端接口 可以进行进一步的判断
        switch (code) {
          case 200:
            // [ 示例 ] code === 0 代表没有错误
            return dataAxios.data
          case 201:
            return dataAxios.data
          case 401:
            // [ 示例 ] 其它和后台约定的 code
            errorCreate(`${dataAxios.message}`)
            break
          case 500:
            // 请求超时
            if (dataAxios.message) {
              errorCreate(`${dataAxios.message}`)
            } else {
              errorCreate(`网络连接超时`)
            }
            break
          default:
            // 不是正确的 code
            if ('message' in dataAxios) {
              errorCreate(`${dataAxios.message}`)
            } else {
              errorCreate(`${dataAxios}`)
            }
            break
        }
      }
    },
    error => {
      if (error && error.response) {
        console.log(error.response)
        switch (error.response.status) {
          case 400:
            error.message = '请求错误'
            break
          case 401:
            error.message = '未授权，请登录'
            break
          case 403:
            error.message = '拒绝访问'
            break
          // case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
          case 404:
            error.message = `请求出错: ${error.response.data.message}`
            break
          case 408:
            error.message = '请求超时'
            break
          case 500:
            error.message = '服务器内部错误'
            break
          case 501:
            error.message = '服务未实现'
            break
          case 502:
            error.message = '网关错误'
            break
          case 503:
            error.message = '服务不可用'
            break
          case 504:
            error.message = '网关超时'
            break
          case 505:
            error.message = 'HTTP版本不受支持'
            break
          default:
            break
        }
      }
      return Promise.reject(error)
    }
  )
  return service
}

export default createService()
