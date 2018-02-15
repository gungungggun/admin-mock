<template lang="pug">
  div.hello
    h1 {{ msg }}
    h2 Essential Links

    b-alert(show="") Default Alert
</template>

<script lang="coffee">
export default
  name: 'HelloWorld'
  data: () ->
    msg: 'Welcome to Your Vue.js App'
</script>

<style lang="stylus" scoped>
h1, h2
  font-weight normal
  color #42b983
</style>
