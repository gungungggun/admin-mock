<template lang="pug">
  main#page-login
    h1 {{ page.name }}
    b-alert(show="") Default Alert

    b-container.bv-example-row
      b-row
        b-table(:items="items" striped hover)

    global-footer
</template>

<script lang="coffee">
import GlobalFooter from '@/components/globals/GlobalFooter'

export default
  name: 'Top'
  metaInfo:
    title: 'Top'
  components:
    GlobalFooter: GlobalFooter
  data: () ->
    items: [
      {
        name: 'A san'
        age: 10
      },
      {
        name: 'B san'
        age: 12
      }
    ]
  computed:
    page: () ->
      return this.$store.state.globals.pages.filter((e) => e.prefix == this.$route.params.prefix)[0]
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
