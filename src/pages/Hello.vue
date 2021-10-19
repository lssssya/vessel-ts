<template>
  <h-page-container>
    <h-page-header
      slot="pageHeader"
      :breadcrumb="i18nBreadcrumb" />
    <hello-word />
  </h-page-container>
</template>
<script>
import HelloWord from '@/components/HelloWorld.vue'

export default {
  name: 'Hello',
  props: {
    breadcrumbObj: {
      type: Object,
      default: () => null
    }
  },
  components: {
    HelloWord
  }
}
</script>
