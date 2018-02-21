<template lang="pug">
  main#page-login
    h1 トップ
    b-alert(show="") Default Alert

    b-container.bv-example-row
      b-row
        b-col 1 of 2
        b-col 2 of 2
      b-row
        b-col 1 of 3
        b-col 2 of 3
        b-col 3 of 3

    div(@click="logout") ログアウト

    global-side

    global-footer
</template>

<script lang="coffee">
import GlobalFooter from '@/components/globals/GlobalFooter'
import GlobalSide from '@/components/globals/GlobalSide'

export default
  name: 'Top'
  metaInfo:
    title: 'Top'
  components:
    GlobalFooter: GlobalFooter
    GlobalSide: GlobalSide
  data: () ->
    form:
      email: ''
  methods:
    logout: () ->
      this.$store.dispatch 'logout'
      .then (res) =>
        this.$router.push '/login'
</script>

<style lang="stylus" scoped>
h1, h2
  font-weight normal
  color #42b983
</style>
