<template lang="pug">
  main(:id="prefix")
    h1 {{ title }}
    b-alert(show="") Default Alert

    slot

    div(@click="logout") ログアウト

    global-side

    global-footer
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
</script>

<style lang="stylus" scoped>
h1, h2
  font-weight normal
  color #42b983
</style>
