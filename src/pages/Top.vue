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

    global-footer
</template>

<script lang="coffee">
import GlobalFooter from '@/components/globals/GlobalFooter'

export default
  name: 'HelloWorld'
  components:
    GlobalFooter: GlobalFooter
  data: () ->
    form:
      email: ''
  methods:
    login: () ->
      this.$store.dispatch 'login', this.form.email
</script>

<style lang="stylus" scoped>
h1, h2
  font-weight normal
  color #42b983
</style>
