import Vue from 'vue'
import Router, { RouteConfig, RouteMeta } from 'vue-router'
import store from '@/store'

import routes, { VesselRouter } from '../router.config'

Vue.use(Router)

const createRoute = (routes: VesselRouter[]): RouteConfig[] => {
  return routes.reduce((processedRoutes: RouteConfig[], currentRoute: VesselRouter) => {
    processedRoutes.push(processRouteObj(currentRoute))
    return processedRoutes
  }, [])
}

const processRouteObj = ({
  menuCode,
  breadcrumb,
  children,
  component,
  ...args
}: VesselRouter): RouteConfig => {

  const route = Object.assign(
    {
      meta: { menuCode },
      props: {
        breadcrumbObj: {
          content: breadcrumb,
          menuCode: menuCode,
        },
      },
      component: () => import(/* webpackInclude: /\.(js|vue)$/ */ `@/pages/${component}`),
      children: children ? createRoute(children) : [],
    },
    args,
  )

  return route
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: createRoute(routes),
})

router.beforeEach(async (to, form, next) => {
  const { code } = store.state.userInfo
  // 防止死循环跳出
  if (to.path.indexOf('error') > -1) {
    next()
    return
  }

  // meta?: RouteMeta 还是类型保护问题
  const { menuCode } = to.meta as RouteMeta

  if (code.includes(`${process.env.VUE_APP_CONTEXT}_${menuCode}`)) {
    next()
  } else if (menuCode) {
    // 真实菜单，但无权限
    next({ path: '/error/403' })
  } else {
    // 不属于系统的url，跳转到404页面
    next({ path: '/error/404' })
  }
})

export default router
