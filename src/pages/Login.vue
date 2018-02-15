<template lang="pug">
  main#page-login
    h1 ログイン
    b-alert(show="") Default Alert

    b-container.bv-example-row
      b-row
        b-col 1 of 2
        b-col 2 of 2
      b-row
        b-col 1 of 3
        b-col 2 of 3
        b-col 3 of 3

    div
      b-form
        b-form-group(label="Email address:" label-for="exampleInput1" description="We'll never share your email with anyone else.")
          b-form-input#exampleInput1(
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email")

        b-button(variant="primary" @click="login") ログイン
</template>

<script lang="coffee">
export default
  name: 'HelloWorld'
  data: () ->
    form:
      email: ''
  methods:
    login: () ->
      alert(this.form.email)
</script>

<style lang="stylus" scoped>
h1, h2
  font-weight normal
  color #42b983
</style>
