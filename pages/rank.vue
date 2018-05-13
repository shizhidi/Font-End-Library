<template>
 <section :class="$style.container">
   <div>
    <h2>前端 TOP 50</h2>
    <div :class="$style.container_btn">
      <Btn :class="[$style.hot,$style.active]"><icon name="hot" :scale="3"></icon><span>热门</span></Btn>
      <Btn :class="$style.trend"><icon name="trend" :scale="3"></icon><span>趋势</span></Btn>
    </div>
    <div :class="$style.TopOne">
      <nuxt-link to="/"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1521032852550-1-1689.png?x-oss-process=style/subject_repo" alt=""><h6>tabler</h6></nuxt-link>
      <span>构建在 BootStrap 4 之上的免费的 HTML 控制面板框架</span>
    </div>
    <ul>
      <li>
        <span>2</span>
        <nuxt-link to="/">
          <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1521032852550-1-1689.png?x-oss-process=style/subject_repo" alt="">
          <h4>vue</h4>
          <p>一个用以创建用户接口的直观、快速、简洁的 MVVM 框架</p>
        </nuxt-link>
        <i></i>
      </li>
      <li>
        <span>2</span>
        <nuxt-link to="/">
          <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1521032852550-1-1689.png?x-oss-process=style/subject_repo" alt="">
          <h4>vue</h4>
          <p>一个用以创建用户接口的直观、快速、简洁的 MVVM 框架</p>
        </nuxt-link>
        <i></i>
      </li>
    </ul>
   </div>
 </section>
</template>

<script>
import Btn from '~/components/core/btn.vue'
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
  components: {
    Btn
  }
}
</script>
<style lang='scss' module>
.container {
  padding: 120px 0 40px 0;
  div {
    width: 770px;
    margin: 0 auto;
    h2, .container_btn{
      text-align: center;
    }
    h2 {
      font-size: 39px;
      font-weight: bold;
    }
    .container_btn {
      padding: 40px 0;
      a {
        margin: 0 10px;
      }
      .hot, .trend {
        padding: 8px 16px;
        color: #000;
        background-color: transparent;
        border: 1px solid #000;
        svg {
          width: 20px;
          height: 20px;
        }
        svg, span {
          vertical-align: middle;
          padding: 0 3px;
        }
      }
      .active {
        border-color: #DA552F;
        color: #DA552F;
        background-color: #fff;
      }
    }
    .TopOne {
      height: 200px;
      text-align: center;
      background-color: #278A95;
      a {
        display: block;
        color: #60BED8;
        padding-top: 30px;
        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
        h6 {
          padding: 16px 0;
        }
      }
      span {
        color: #60BED8;
        font-size: 13px;
      }
    }
    ul {
      background-color: #fff;
      li {
        height: 104px;
        line-height: 104px;
        border-bottom: 1px solid #F5F5F5;
        &:hover {
          background-color: #F6FCFF;
        }
        > span {
          width: 80px;
          text-align: center;
          font-size: 22px;
          display: inline-block;
          vertical-align: middle;
        }
        > a {
          display: inline-block;
          position: relative;
          vertical-align: middle;
          padding: 22px 0 22px 70px;
          img {
            width: 60px;
            height: 60px;
            position: absolute;
            left: 0;

          }
          h4,p {
            height: 28px;
            line-height: 28px;
          }
          h4 {
            font-size: 20px;
          }
        }
        i {
          float: right;
          width: 16px;
          height: 16px;
          margin: 44px 22px 44px 0;
          background-color: #A4EDA4;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
