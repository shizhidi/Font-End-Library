<template lang="html">
    <nuxt-link :to="path" :class="[btnClass,cname]">
        <slot/>
    </nuxt-link>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: '/'
    },
    cname: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      btnClass: 'btn'
    }
  }
}
</script>

<style lang="scss">
    @import "~assets/sass/mixin.scss";
    .btn {
        @include btn;
    }
</style>
