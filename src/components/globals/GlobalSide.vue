<template lang="pug">
  nav#side
    ul(v-for="page in $store.state.globals.pages")
      li
        router-link(:to="'/manage/' + page.prefix") {{ page.name }}
</template>

<style lang="stylus" scoped>
#side
  background #ccc
</style>
