<template lang="pug">
  bootstrap-layout(:prefix="'top'" :title="'Top'")
    b-container.bv-example-row
      b-row
        b-col 1 of 2
        b-col 2 of 2
      b-row
        b-col 1 of 3
        b-col 2 of 3
        b-col 3 of 3
    p {{ $store.state.test.test }}

</template>

<script lang="coffee">
import BootstrapLayout from '@/components/layouts/BootstrapLayout'

export default
  name: 'Top'
  metaInfo:
    title: 'Top'
  components:
    BootstrapLayout: BootstrapLayout
</script>

<style lang="stylus" scoped>
h1, h2
  font-weight normal
  color #42b983
</style>
