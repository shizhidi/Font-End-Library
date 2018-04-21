<template>
<section :class="$style.container">
    <div :class="$style.container_top">
        <h3>我们在用</h3>
        <p>参考大家在使用的框架，给自己的选择提供一个很好的参考</p>
        <nuxt-link to="/">我要分享</nuxt-link>
    </div>
    <div :class="$style.container_bottom">
      <p :class="$style.container_bottom_Notice">
        默认我们只会将 GitHub 关注数 >= 50 并且使用数 >= 5 的会员展示在该板块，但如果你在大厂工作或有其它原因，请告知我们
      </p>
      <ul class="clearfix">
        <li>
          <nuxt-link to="/"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151009222011-95-1.jpg?x-oss-process=style/repo" alt=""><h6>bootstrap</h6></nuxt-link>
          <span>我在用</span>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
</section>
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
@import "~assets/sass/mixin.scss";
.container {
    background-color: #FFFFFF;
    > div {
        margin: 0 auto;
    }
    .container_top {
        height: 250px;
        padding-top: 60px;
        background-color: #F7F8FA;
        text-align: center;
        font-size: 13px;
        h3 {
            font-size: 26px;
            padding-top: 50px;
            font-weight: bold;
        }
        p {
            padding: 28px 0 34px 0;
        }
        > a {
            display: inline-block;
            width: 94px;
            height: 40px;
            line-height: 40px;
            color: #d9534f;
            border: 1px solid #A94442;
            box-sizing: border-box;
        }
    }
    .container_bottom {
        width: 960px;
        padding-top:20px;
        > p {
          height: 40px;
          line-height: 40px;
          border-radius: 4px;
          text-align: center;
          color: #D19004;
          background-color: #FFF3CD;
          font-size: 13px;
          margin-bottom: 54px;
        }
        > ul {
          margin-right: -32px;
          li {
            float: left;
            width: 220px;
            height: 217px;
            padding: 40px;
            margin: 0 28px 40px 0;
            text-align: center;
            border: 1px solid #F4F4F4;
            box-sizing: border-box;
            a {
              img {
                width: 100px;
                height: 69px;
              }
              h6 {
                padding: 12px 0;
                font-size: 13px;
                font-weight: bold;
              }
            }
            > span {
              display: inline-block;
              width: 60px;
              height: 30px;
              line-height: 30px;
              font-size: 12px;
              color: #37C700;
              border: 1px solid #37C700;
            }
          }
        }
    }
}
</style>
