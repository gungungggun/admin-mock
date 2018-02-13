<template lang="pug">
  div.hello
    h1 {{ msg }}
    h2 Essential Links
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus" scoped>
h1, h2
  font-weight normal
  color #42b983
</style>
