<template>
 <section :class="$style.container" class="clearfix">
   <aside>
     <div :class="$style.header">
      <div :class="$style.header_bgImg" style="background-image:url(https://awesomes.oss-cn-beijing.aliyuncs.com/mem/1500260449387-1808-6090.png);"></div>
      <div :class="$style.header_content" v-on:mouseenter="showProfile = true" v-on:mouseleave="showProfile = false">
        <nuxt-link to="/users/111/profile" :class="$style.header_profile" v-show="showProfile"><icon name="modify" :scale="3" style="color: #fff;"></icon></nuxt-link>
        <nuxt-link to="/" :class="$style.header_img"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/1500260449387-1808-6090.png?x-oss-process=style/subject_repo" alt=""></nuxt-link>
        <p :class="$style.name">phodal</p>
        <p :class="$style.position"><icon name="position" :scale="3" :class="$style.positionIcon"></icon><span>Shenzhen China</span></p>
      </div>
     </div>
     <div :class="$style.use">
       <p>
         <nuxt-link to="/users/111/uses">11</nuxt-link>
         <span>在用</span>
       </p>
       <p>
         <nuxt-link to="/users/111/marks">20</nuxt-link>
         <span>收藏</span>
       </p>
     </div>
     <nav>
       <nuxt-link to="/"><icon name="home" :scale="3" style="color: #009688;"></icon><span>主页</span><i></i></nuxt-link>
       <nuxt-link to="/"><icon name="weibo" :scale="3" style="color: #FF0000;"></icon><span>phodal</span><i></i></nuxt-link>
       <nuxt-link to="/"><icon name="twitter" :scale="3" style="color: #06A2F3;"></icon><span>phodal_hang</span><i></i></nuxt-link>
       <nuxt-link to="/"><icon name="github" :scale="3"></icon><span>phodal</span><i></i></nuxt-link>
     </nav>
   </aside>
   <article>
     <div :class="$style.header">
       <nuxt-link to="/users/111/uses" active-class="menuActive">TA在用</nuxt-link>
       <nuxt-link to="/users/111/marks" active-class="menuActive">TA收藏的</nuxt-link>
       <nuxt-link to="/users/111/comments" active-class="menuActive">TA的评论</nuxt-link>
     </div>
     <nuxt-child :key="$route.params.id"/>
   </article>
 </section>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      showProfile: false
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
  .container {
    padding: 110px 0 70px 0;
    width: 1110px;
    margin: 0 auto;
    aside {
      width: 254px;
      height: 506px;
      float: left;
      background-color: #fff;
      .header {
        position: relative;
        height: 250px;
        .header_bgImg {
          width: 100%;
          height: 100%;
          background-size: cover;
          filter: blur(3px);
        }
        .header_content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          text-align: center;
          .header_profile {
            position: absolute;
            right: 10px;
            top: 10px;
            svg {
              width: 20px;
              height: 20px;
            }
          }
          .header_img {
            display: block;
            margin-top: 26px;
            img {
              width: 80px;
              height: 80px;
              padding: 10px;
              border: 10px solid rgba($color: #ffffff, $alpha: .25);
              background-color: rgba($color: #ffffff, $alpha: .4);
              border-radius: 80px;
            }
          }
          .name {
            margin-top: 10px;
            font-size: 22px;
          }
          p {
            padding: 6px 0;
            color: #fff;
            .positionIcon {
              width: 18px;
              height: 18px;
            }
          }
          .position {
            svg {
              width: 20px;
              height: 20px;
              vertical-align: middle;
            }
            span {
              vertical-align: middle;
              padding-left: 4px;
              font-size: 12px;
            }
          }
        }

      }
      .use {
        height: 88px;
        padding-top: 26px;
        box-sizing: border-box;
        border-bottom: 1px solid #F8F8FA;
        p {
          width: 127px;
          float: left;
          text-align: center;
          a {
            display: block;
            font-size: 18px;
            padding-bottom: 6px;
            color: #FFA400;
          }
          span {
            font-size: 14px;
          }
        }
      }
      nav {

        a {
          display: block;
          height: 42px;
          padding: 0 16px;
          border-bottom: 1px solid #F8F8FA;
          box-sizing: border-box;
          svg {
            width: 20px;
            height: 20px;
            vertical-align: middle;
          }
          i {
            line-height: 42px;
            vertical-align: middle;
          }
          span {
            float: right;
            line-height: 42px;
            vertical-align: middle;
            font-size: 14px;
          }
        }
      }
    }
    article {
      float: right;
      width: 825px;
      margin-left: 30px;
      background-color: #fff;
      .header {
        height: 52px;
        line-height: 52px;
        background-color: #FCFCFB;
        > a {
          font-size: 14px;
          font-weight: bold;
          display: inline-block;
          padding-left: 30px;
        }
      }
    }
  }
</style>
