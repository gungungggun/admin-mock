<template lang="pug">
  div#all
    main(:id="prefix")
      h1 {{ title }}
      b-alert(show="") Default Alert

      slot

      div(@click="logout") ログアウト

      global-footer

    global-side#global-side

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
#all
  display flex
  flex-direction row-reverse
  width 100vw
main
  width 80%
#global-side
  width 20%
  height 100vh
  background #025
</style>
