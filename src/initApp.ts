import store from '@/store'
import { mountVueInstance, errorLoadPage } from 'dolphin-plugin-tools'
import router from './router'
import App from './App.vue'
import ErrorPage from '@/components/ErrorPage.vue'
import { renderThemeFromCssUrl } from 'dolphin-plugin-tools'
import i18n from '@/i18n/index'
import huiLocale from 'hui/lib/locale'
import huiProLocale from '@hui-pro/locale'
import axios from 'axios'
import { setLanguage as setLanguageInternal } from 'dolphin-plugin-tools'

import { VueConstructor } from 'vue'
import { User } from './store/types'



async function initApp(Vue: VueConstructor) {
  try {
    // eslint-disable-next-line no-unused-vars
    const { userInfo } = await store.dispatch('setUserInfo')
    await Promise.all([setLanguage(userInfo), renderTheme(userInfo)])
    // 初始化vue实例
    mountVueInstance(Vue, App, {
      i18n,
      store,
      router
    })
  } catch (error) {
    const defaultUserInfo: User = {
      skin: 'redblack',
      languageId: 'zh_CN',
      code: []
    }
    await renderTheme(defaultUserInfo)
    console.error('init error:', error)
    // errorLoadPage(Vue, ErrorPage, '500', '服务器异常，请联系管理员') // 如果是国际产品会默认显示英文，纯国内使用可以用中文
    errorLoadPage(Vue, ErrorPage, '500', '服务器异常，请联系管理员', [])
  }
}

async function renderTheme({ skin }: User) {
  try {
    const assetsUrl = process.env.BASE_URL + process.env.VUE_APP_ASSETS
    // public/static/skin/xxx/skin.css
    const requestUrl = `${assetsUrl}/skin/${skin}/skin.css`
    await renderThemeFromCssUrl(requestUrl)
  } catch (error) {
    console.error('设置自定义皮肤失败')
    throw error
  }
}

async function setLanguage({ languageId }: User) {
  const assetsUrl = process.env.BASE_URL + process.env.VUE_APP_ASSETS
  // public/static/i18n/xxx/translate.json
  const requestUrl = `${assetsUrl}/i18n/${languageId}/translate.json`
  const i18nJson = await axios.get(requestUrl)
  await setLanguageInternal(i18nJson.data, languageId, [huiLocale, huiProLocale], i18n)
}

export default initApp
