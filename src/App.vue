<template>
  <h-page id="app">
    <h-page-menu :menu="menu" />
    <router-view />
  </h-page>
</template>

<script>
import navList from './nav.config.js'
export default {
  name: 'App',
  computed: {
    menu() {
      navList.forEach(nav => {
        nav.title = this.$t ? this.$t(nav.title) : nav.title
      })
      const { userInfo } = this.$store.state
      if (!userInfo) return []
      // 展示有权限的菜单项
      return navList.filter(nav => {
        return (userInfo.code || []).includes(`${process.env.VUE_APP_CONTEXT}_${nav.menuCode}`)
      })
    },
  },
}
</script>
