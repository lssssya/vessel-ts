// hui
declare module '@hui/svg-icon'

// hui-pro
declare module '@hui-pro/utils'

declare module '@hui-pro/page' {
  import { PluginFunction } from 'vue'
  const page: PluginFunction<any>
  export default page
}

declare module '@hui-pro/layout' {
  import { PluginFunction } from 'vue'
  const layout: PluginFunction<any>
  export default layout
}

declare module '@hui-pro/empty' {
  import { PluginFunction } from 'vue'
  const empty: PluginFunction<any>
  export default empty
}


// i18n
interface Locale {
  use: (lang: string) => void,
  t: (path: string, options: any) => string,
  i18n: () => void
}

declare module 'hui/lib/locale' {
  const locale: Locale
  export default locale
}

declare module '@hui-pro/locale' {
  const locale: Locale
  export default locale
}

declare module 'hui/lib/locale/lang/zh-CN'

declare module '@hui-pro/locale/lang/zh_CN'


// 第三方
declare module 'traceservice-instrumentation-axios' {
  import wrapAxiosInstance from 'traceservice-instrumentation-axios'
  export default wrapAxiosInstance
}
