import axios from 'axios'
import { Message } from 'hui'
import { trimOnlySpace } from '@hui-pro/utils'
import { REQUEST_SUCCESS, REFRESH_BY_HEADER } from '@/constant'
import wrapAxiosInstance from 'traceservice-instrumentation-axios'
import i18n from '@/i18n/index.js'

const http = axios.create({
  timeout: 20000,
  withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
})

// 用于上报前端调用链信息, 不会影响正常开发流程
// http://iris.hikvision.com.cn/conch/traceservice-instrumentation-axios
wrapAxiosInstance(http, { serviceName: process.env.VUE_APP_CONTEXT })

// 相应拦截器
http.interceptors.response.use(
  function (response) {
    // 请求多语言的json文件
    if (/.*\.json$/.test(response.config.url)) {
      return response
    }

    // 根据响应数据判断是否登录过期
    if (response.data.errorCode === REFRESH_BY_HEADER) {
      let refreshUrl = response.headers['refresh-url'].split('?')[0]
      refreshUrl =
        refreshUrl +
        '?service=' +
        location.protocol +
        '//' +
        location.host +
        location.pathname +
        encodeURIComponent(location.search)
      location.href = refreshUrl
      return
    }

    // 对错误进行统一处理
    if (response.data.code !== REQUEST_SUCCESS) {
      if (!response.config.noMsg && response.data.msg) {
        Message.error(i18n.t(response.data.msg))
      }
      return Promise.reject(response)
    } else if (response.data.code === REQUEST_SUCCESS && response.config.successNotify && response.data.msg) {
      // 弹出成功提示
      Message.success(i18n.t(response.data.msg))
    }
    return Promise.resolve({
      code: response.data.code,
      msg: response.data.msg,
      data: response.data.data,
    })
  },
  function (error) {
    if (error.message.indexOf('timeout') > -1) {
      // 多语言需要自己在项目中配置
      Message.error('请求超时，请重试！')
    }

    return Promise.reject(error)
  },
)

// 请求拦截器
http.interceptors.request.use(
  function (config) {
    // 所有搜索框可输入元素，都不需要去掉前后空格，只有仅输入空格时，此字段搜索无效。(规范: http://iris.hikvision.com.cn/huidesign/bscs/issues/83)
    return trimOnlySpace(config)
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

export default http
