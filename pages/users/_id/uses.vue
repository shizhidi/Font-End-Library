<template>
  <div :class="$style.content">
    <ul class="clearfix">
      <li><nuxt-link to="/"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151011005628-65-1.jpg?x-oss-process=style/subject_repo" alt=""><span>react</span><i>20</i></nuxt-link></li>
      <li><nuxt-link to="/"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151011005628-65-1.jpg?x-oss-process=style/subject_repo" alt=""><span>react</span><i>20</i></nuxt-link></li>
      <li><nuxt-link to="/"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151011005628-65-1.jpg?x-oss-process=style/subject_repo" alt=""><span>react</span><i>20</i></nuxt-link></li>
      <li><nuxt-link to="/"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151011005628-65-1.jpg?x-oss-process=style/subject_repo" alt=""><span>react</span><i>20</i></nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      attribute: '属性'
    }
  },
  computed: {},
  create () {},
  mounted () {},
  methods: {},
  components: {}
}
</script>
<style lang='scss' module>
  .content {
    padding: 50px 30px;
    box-sizing: border-box;
    ul {
      li {
        width: 123px;
        float: left;
        padding: 0 34px;
        a {
          position: relative;
          display: block;
          text-align: center;
          img {
            display: block;
            padding-bottom: 16px;
            margin: 0 auto;
            width: 50px;
            height: 50px;
          }
          i {
            position: absolute;
            top: -6px;
            right: 26px;
            padding: 5px;
            border-radius: 100px;
            color: #fff;
            border: 1px solid #fff;
            background-color: #3E9EF1;
          }
          span {
            font-size: 16px;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
