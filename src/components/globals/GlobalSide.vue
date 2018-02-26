<template lang="pug">
  nav#global-side(:class="showMenu ? '' : 'c'")
    div.logo
      img(src="./../../assets/logo.png")
    div.toggle
      div.button(@click="toggleMenu")
        icon(name="flag")
    ul(v-for="page in $store.state.globals.pages")
      li
        router-link(:to="'/manage/' + page.prefix") {{ page.name }}
</template>

<script lang="coffee">
export default
  data: () ->
    showMenu: true
  methods:
    toggleMenu: () ->
      this.showMenu = !this.showMenu
</script>

<style lang="stylus" scoped>
#global-side
  background #025
  width 20%
  height 100vh
  &.c
    width 50px
  .logo
    height 70px
    width 25%
    padding 10px
    img
      height 100%
  .toggle
    width 100%
    height 50px
    .button
      width 50px
      height 50px
      background #015
  ul
    li
      a
        display block
        width 100%
        color #fff
        &:hover
          background #015
          text-decoration none
</style>
