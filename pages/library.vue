<template>
 <section :class="$style.container">
     <ul :class="$style.librayMenu">
         <li>
             <nuxt-link to="/about" :class="$style.active"><icon name="application" :scale="3"></icon><span>应用</span></nuxt-link>
         </li>
         <li>
             <nuxt-link to="/about"><icon name="mobil" :scale="3"></icon><span>移动端</span></nuxt-link>
         </li>
         <li>
             <nuxt-link to="/about"><icon name="multimedia" :scale="3"></icon><span>多媒体</span></nuxt-link>
         </li>
         <li>
             <nuxt-link to="/about"><icon name="dom" :scale="3"></icon><span>Dom</span></nuxt-link>
         </li>
         <li>
             <nuxt-link to="/about"><icon name="img" :scale="3"></icon><span>图像图表</span></nuxt-link>
         </li>
         <li>
             <nuxt-link to="/about"><icon name="nodejs" :scale="3"></icon><span>Node.js</span></nuxt-link>
         </li>
         <li>
             <nuxt-link to="/about"><icon name="form" :scale="3"></icon><span>表单</span></nuxt-link>
         </li>
     </ul>
    <ul :class="$style.libraryMenuSon" v-show="currentMenu == 'app'">
        <li>
            <nuxt-link to="/about"><icon name="application" :scale="3"></icon><span>框架</span></nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about"><icon name="application" :scale="3"></icon><span>构建工具</span></nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about"><icon name="application" :scale="3"></icon><span>模块加载</span></nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about"><icon name="application" :scale="3"></icon><span>包管理器</span></nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about"><icon name="application" :scale="3"></icon><span>模板引擎</span></nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about"><icon name="application" :scale="3"></icon><span>测试框架</span></nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about"><icon name="application" :scale="3"></icon><span>实用工具</span></nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about"><icon name="application" :scale="3"></icon><span>开发助手</span></nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about"><icon name="application" :scale="3"></icon><span>( 预 )处理器</span></nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about"><icon name="application" :scale="3"></icon><span>游戏引擎</span></nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about"><icon name="application" :scale="3"></icon><span>代码高亮</span></nuxt-link>
        </li>
        <li>
            <nuxt-link to="/about"><icon name="application" :scale="3"></icon><span>代码检查</span></nuxt-link>
        </li>
    </ul>
    <ul :class="$style.libraryMenuMobil" v-show="currentMenu == 'mobil'">
        <li>
            <nuxt-link to="/about" :class="$style.active"><icon name="application" :scale="3"></icon><span>应用</span></nuxt-link>
        </li>
    </ul>
     <div :class="$style.screen">

     </div>
     <ul :class="$style.librayList">
         <li></li>
     </ul>
 </section>
</template>
<script>
export default {
  data () {
    return {
      currentMenu: 'app',
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
width: 870px;
padding: 60px 0 110px 0;
margin: 0 auto;
background-color: #FFFFFF;
  .librayMenu,.libraryMenuSon {
    text-align: center;
    padding: 20px 0;
  }
  .librayMenu li,.libraryMenuSon li {
    display: inline-block;
    height: 40px;
    color: rgb(19, 13, 13);
    a {
        display: inline-block;
        position: relative;
        font-size: 13px;
        padding-right: 36px;
        height: 40px;
        text-align: left;
        line-height: 40px;
        vertical-align: middle;
        svg {
            @include vertical-center();
            left: 0;
            width: 16px;
            height: 16px;
        }
        span {
            padding-left: 20px;
            display: inline-block;
        };
        &.active {
            color: #DA552F;
            span {
                font-weight: bold;
            }
        }
    }
    &:first-child{
        padding-left: 36px;
    }
  }
  .libraryMenuSon li {
    color: #979797;
    svg {
      width: 14px;
      height: 14px;
    }
    a {
      padding-right: 30px;
    }
  }
}
</style>