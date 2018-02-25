<template lang="pug">
  div#all
    main(:id="prefix")
      div.wrap
        div.title
          h1 {{ title }}
        div.alert
          b-alert Default Alert
        div.inner
          slot

      div(@click="logout") ログアウト

      global-footer

    global-side

</template>

<script lang="coffee">
import GlobalFooter from '@/components/globals/GlobalFooter'
import GlobalSide from '@/components/globals/GlobalSide'

export default
  components:
    GlobalFooter: GlobalFooter
    GlobalSide: GlobalSide
  props:
    prefix:
      default: ''
      type: String
    title:
      default: ''
      type: String
  methods:
    logout: () ->
      this.$store.dispatch 'logout'
      .then (res) =>
        this.$router.push '/login'
</script>

<style lang="stylus" scoped>
#all
  display flex
  flex-direction row-reverse
  width 100vw
  main
    width 100%
    .wrap
      .title
        width 100%
        padding 10px
      .inner
        width 100%
</style>
