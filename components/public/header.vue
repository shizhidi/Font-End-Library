<template>
 <header :class="[$style.header,{headMenu:showMenu}]">
   <h1 :class="$style.logo">
     <nuxt-link to="/"><img src="https://ofm2qnhj5.qnssl.com/.nuxt/dist/img/logo-50.30615fb.png" alt=""></nuxt-link>
     <nuxt-link to="/" :class="$style.logo_text">nodecall</nuxt-link>
     <span :class="$style.menu" @click="showMenu ? showMenu = false : showMenu = true">
       <icon name="menu" :scale="3" :class="$style.menuIcon"></icon>
     </span>
   </h1>
   <nav :class="$style.left">
     <nuxt-link to="/library/applications/frameworks" active-class="menuActive">前端库</nuxt-link>
     <nuxt-link to="/ouruse" active-class="menuActive">大牛在用</nuxt-link>
     <nuxt-link to="/subject" active-class="menuActive">专题</nuxt-link>
     <!-- <nuxt-link to="/about">场景</nuxt-link> -->
     <!-- <nuxt-link to="/subject">工具</nuxt-link> -->
     <nuxt-link to="/intelligence" active-class="menuActive">情报局</nuxt-link>
     <!-- <nuxt-link to="/about">新版发布</nuxt-link> -->
     <nuxt-link to="/rank" active-class="menuActive">前端TOP50</nuxt-link>
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
      <nuxt-link to="/about" v-if="ifLogin == false">登录</nuxt-link>

      <nuxt-link to="/about" :class="$style.message" v-if="ifLogin == true">
        <icon name="message" :scale="5" ></icon>
      </nuxt-link>
      <nuxt-link to="/users/111" :class="$style.headerImg" v-if="ifLogin == true">
        <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/1500258263178-545-6694.png?x-oss-process=style/repo-50" alt="">
      </nuxt-link>
      <a href="javascript:void(0)" :class="$style.message" v-on:mouseenter="userMenu = true" v-on:mouseleave="userMenu = false" v-if="ifLogin == true">
        <icon name="ellipsis" :scale="5"></icon>
      </a>
      <div v-show="userMenu" v-on:mouseenter="userMenu = true" v-on:mouseleave="userMenu = false">
        <nuxt-link to="/about">我的收藏</nuxt-link>
        <nuxt-link to="/about">个人资料</nuxt-link>
        <a href="javascript:void(0)">注销</a>
      </div>
   </nav>
 </header>
</template>

<script>
export default {
  data () {
    return {
      headMenu: 'headMenu',
      showMenu: false,
      showSearch: true,
      userMenu: false,
      ifLogin: true
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
  font-size: 14px;
  padding: 0px 138px;
  z-index: 100;
  background-color: #fff;
  box-shadow:1px 0px 1px rgba(0, 0, 0, .3);
  @media screen and (max-width: 970px) {
    padding: 0px 50px;
  }
  @media screen and (max-width: 700px) {
    padding: 0px 24px;
  }
  .headMenu {
    height: 120px;
  }
  .logo {
    float: left;
    img {
      width: 25px;
      height: 25px;
      vertical-align: middle;
    }
    .logo_text {
      padding-left: 10px;
      font-weight: bold;
      color: #DA552F;
      @media screen and (max-width: 970px) {
        display: none;
      }
    }
    .menu .menuIcon {
      display: none;
      width: 16px;
      height: 16px;
      padding-left: 30px;
      vertical-align: -3px;
      @media screen and (max-width: 970px) {
        display: inline-block;
      }
    }
    span {
      cursor: pointer;
      &:hover {
        color: #DA552F;
      }
    }
  }
  .left {
    float: left;
    @media screen and (max-width: 866px) {
      width: 216px;
    }
    @media screen and (max-width: 500px) {
      width: 110px;
    }
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
    @media screen and (max-width: 1160px) {
      display: none;
    }
  }
  .right {
    float: right;
    position: relative;
    .addIcon {
      > .addIconSon {
        height: 60px;
      }
    }
    .message {
      > svg {
          width: 22px;
          height: 22px;
          vertical-align: middle;
      }
    }
    .headerImg {
      img {
        width: 25px;
        height: 25px;
        border-radius: 25px;
        vertical-align: middle;
      }
    }
    > div {
      width: 148px;
      height: 152px;
      border: 1px solid #DDDDDD;
      background-color: white;
      position: absolute;
      top:60px;
      right: 0;
      color: #7b7676;
      a {
        display: block;
        height: 50px;
        line-height: 50px;
        font-weight: bold;
        text-align: center;
        border-bottom: 1px solid #DDDDDD;
        &:hover {
          color: #DA552F;
        }
      }
    }
  }
  nav > a {
    color: #7b7676;
    font-weight: bold;
    float: left;
    padding-left: 30px;
    height: 60px;
    overflow: hidden;
    &:hover {
      color: #DA552F;
    }
  }
}
</style>
