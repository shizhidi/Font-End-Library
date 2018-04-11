<template lang="html">
  <section :class="cname">
    <!-- <swiper :mySwiper="options" :not-next-tick="options.notNextTick">
        <swiper-slide v-for="item in items" :key="item.href">
            <router-link :to="{ name: item.href}">
            <img :src="item.src" alt="">
            </router-link>
        </swiper-slide>
        <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
    </swiper> -->
    <div v-swiper:mySwiper="options" :class="swiper" :not-next-tick="options.notNextTick">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in items">
          <h4>{{ item.title }}</h4>
          <nuxt-link :to="{ name: item.href}">
            <img :src="item.src" alt="">
          </nuxt-link>
        </div>
      </div>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
  </div>
  </section>
</template>

<script>
export default {
  components: {
  },
  props: {
    cname: {
      type: String,
      default: ''
    },
    swiper: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default () {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          notNextTick: false
        }
      }
    },
    items: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss">

</style>
