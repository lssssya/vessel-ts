<template>
  <h-page-container>
    <h-empty
      size="lg"
      :description="text"
    >
      <h-empty-error-net
        v-if="code==='403' || code==='404'"
        slot="img"
      />
      <h-empty-error-server
        v-else
        slot="img"
      />
    </h-empty>
  </h-page-container>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    code: {
      type: String,
      default: '404'
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
