<template>
 <header :class="$style.header">
   <h1 :class="$style.logo">
     <nuxt-link to="/">nodecall</nuxt-link>
   </h1>
   <nav :class="$style.left">
     <nuxt-link to="/library/applications/frameworks">前端库</nuxt-link>
     <nuxt-link to="/ouruse">我们在用</nuxt-link>
     <nuxt-link to="/subject">专题</nuxt-link>
     <nuxt-link to="/about">开发场景</nuxt-link>
     <!-- <nuxt-link to="/about">情报局</nuxt-link>
     <nuxt-link to="/about">新版发布</nuxt-link> -->
     <nuxt-link to="/rank">前端TOP50</nuxt-link>
   </nav>
   <div :class="$style.searchFather">
      <input :class="$style.searchText" type="text" placeholder="搜索前端库">
      <nuxt-link to="/about">
        <icon name="search" :scale="2" :class="$style.searchIcon"></icon>
      </nuxt-link>
   </div>
   <nav :class="$style.right">
      <nuxt-link to="/about" :class="$style.addIcon">
        <icon name="add" :scale="3" :class="$style.addIconSon"></icon>
      </nuxt-link>
      <nuxt-link to="/about">登录</nuxt-link>
   </nav>
 </header>
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
<style lang="scss" module>
.header{
  height: 60px;
  line-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  font-size: 14px;
  padding: 0px 138px;
  z-index: 100;
  box-shadow:1px 0px 1px rgba(0, 0, 0, .3);
  background: #fff url('~/assets/img/logo.png') left 138px center no-repeat;
  background-size: 25px 25px; // 图片尺寸设置
  .logo {
    float: left;
    a {
      padding-left: 33px;
      font-weight: bold;
      color: #DA552F;
    }
  }
  .left {
    float: left;
  }
  .searchFather {
    float: left;
    margin-left: 90px;
    color: #7b7676;
    position: relative;
    .searchText {
      width: 180px;
      height: 36px;
      border: 1px solid #EEEEEE;
      text-indent: 10px;
    }
    .searchIcon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 5px;
      color: #7b7676;
    }
  }
  .right {
    float: right;
    .addIcon {
      > .addIconSon {
        height: 60px;
      }
    }
  }
  nav > a {
    color: #7b7676;
    font-weight: bold;
    display: inline-block;
    padding-left: 30px;
    height: 60px;
    overflow: hidden;
    &:hover {
      color: #DA552F;
    }
  }
}
</style>
