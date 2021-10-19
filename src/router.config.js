export default [
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
