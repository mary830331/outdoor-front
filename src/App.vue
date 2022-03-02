<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  computed: {
    user () {
      return this.$store.getters['user/user']
    }
  },
  async created () {
    this.$store.dispatch('user/getInfo')
  }
}
</script>
