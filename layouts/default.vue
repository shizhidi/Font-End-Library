<template>
  <div>
    <my-header/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyHeader from '~/components/public/header.vue'
import MyFooter from '~/components/public/footer.vue'

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="scss" module>


</style>
