import type { RouteConfig } from 'vue-router'

// error 接口只能扩展使用静态已知成员的对象类型或对象类型的交集
// interface VesselRouter extends RouteConfig {
//   menuCode?: string,
//   breadcrumb?: string[],
//   component?: string
// }

// 新思路
interface extendOptions {
  menuCode?: string,
  breadcrumb?: string[],
  component?: string,
  children?: VesselRouter[]
}
export type VesselRouter = RouteConfig & extendOptions

const routes: VesselRouter[] = [
  {
    path: '/',
    redirect: '/hello',
  },
  {
    path: '/error/:type',
    name: 'Error',
    component: 'Error', // 注意提供ErrorPage组件内的多语言翻译
  },
  {
    name: 'hello1',
    path: '/hello1/',
    menuCode: '无权限的测试，请输入hello1',
    component: 'Hello',
  },
  {
    name: 'hello',
    path: '/hello/',
    menuCode: '001',
    component: 'Hello',
  },
]
export default routes