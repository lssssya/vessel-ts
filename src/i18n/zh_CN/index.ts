/**
 * easy-tool读取该文件, 将key-value(中文)上传到多语言平台
 * 将翻译上传到多语言平台, 通过easy-tool的命令将key-value(中文,翻译)下载到public/static/i18n文件夹下
 * 项目中vue-i18n所使用的将是public/static/i18n/下的key-value
 */
import huiLang from 'hui/lib/locale/lang/zh-CN'
import huiProCommonLang from '@hui-pro/locale/lang/zh_CN'
import hello from './hello.json'
import errorPage from './errorPage.json'
// hui-pro多语言导入示例
// import tableTransfer from '@hui-pro/table-transfer/lang/zh_CN'
// const { h: { tableTransfer }} = tableTransfer
const { el } = huiLang
const { h: { common: huiProCommon }} = huiProCommonLang

const h = {
  common: huiProCommon
  // tableTransfer
}

export default {
  h,
  el,
  hello,
  errorPage
}
