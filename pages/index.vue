<template>
  <section :class="$style.container" class="clearfix">
    <article>
      <div :class="$style.webSearch">
        <input type="text" placeholder="搜索前端库">
        <nuxt-link to="/about">
          <icon name="search" :scale="3" :class="$style.searchIcon"></icon>
        </nuxt-link>
      </div>
      <slider :items="items" :cname="$style.slider" :swiper="$style.swiper"/>
      <ul :class="$style.homeList">
        <li>
          <div :class="$style.img">
            <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1522822606241-1-721.png?x-oss-process=style/subject_repo" alt="">
          </div>
          <div :class="$style.Overview">
            <h4><a href="">JavaScript 版本的 TensorFlow 机器学习框架</a></h4>
            <p :class="$style.title">tfjs</p>
            <p :class="$style.des">
              <a href="">应用</a> > <a href="">实用工具</a>
            </p>
          </div>
        </li>
        <li>
          <div :class="$style.img">
            <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1522074884427-1-5933.jpg?x-oss-process=style/subject_repo" alt="">
          </div>
          <div :class="$style.Overview">
            <h4><a href="">JavaScript 神经网络库</a></h4>
            <p :class="$style.title">brain.js</p>
            <p :class="$style.des">
              <a href="">应用</a> > <a href="">实用工具</a>
            </p>
          </div>
        </li>
        <li>
          <div :class="$style.img">
            <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1522728192817-1-7263.png?x-oss-process=style/subject_repo" alt="">
          </div>
          <div :class="$style.Overview">
            <h4><a href="">高亮输入文本段的 Vue 组件</a></h4>
            <p :class="$style.title">vue-highlightable-input</p>
            <p :class="$style.des">
              <a href="">表单</a> > <a href="">表单美化</a>
            </p>
          </div>
        </li>
        <li>
          <div :class="$style.img">
            <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1522075418532-1-25.jpg?x-oss-process=style/subject_repo" alt="">
          </div>
          <div :class="$style.Overview">
            <h4><a href="">一个类似 EasyUI 的 Vue 后台管理面板方案</a></h4>
            <p :class="$style.title">avue</p>
            <p :class="$style.des">
              <a href="">Dom</a> > <a href="">控制面板</a>
            </p>
          </div>
        </li>
      </ul>
    </article>
    <aside>
      <panel :title="title" :class="$style.Powerful">
        <div>
          <div>
            <a href="">
              <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/160830161959-79-286.jpg?x-oss-process=style/repo-50" alt="">
            </a>
          </div>
          <p :class="$style.name"><a href="">调调</a></p>
          <p :class="$style.uses">在用10个库</p>
          <ul>
            <li><a href=""><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/160520125126-36-1.png?x-oss-process=style/repo-50" alt=""></a></li>
            <li><a href=""><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151113203010-72.jpg?x-oss-process=style/repo-50" alt=""></a></li>
            <li><a href=""><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/default.png?x-oss-process=style/repo-50" alt=""></a></li>
            <li><a href=""><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151011135942-0-1.jpg?x-oss-process=style/repo-50" alt=""></a></li>
            <li><a href=""><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151011134645-6-1.jpg?x-oss-process=style/repo-50" alt=""></a></li>
          </ul>
        </div>
      </panel>
      <div :class="$style.contact">
        <i :class="$style.contactIcon">
          <icon name="qq" :scale="3"></icon>
        </i>
        <nuxt-link to="/about">
          <span>官方 QQ 群</span>
          <strong>「910868379」</strong>
        </nuxt-link>
      </div>
      <div :class="$style.FrontEnd">
        <a href="">
          <span :class="$style.FrontImg">
            <img src="https://ofm2qnhj5.qnssl.com/.nuxt/dist/img/fercard-logo.d41cd45.png" alt="">
          </span>
          <span :class="$style.FrontText" >
            <strong>Front End Repo Card</strong>
            <i>随机推荐优秀前端框架卡片</i>
          </span>
        </a>
      </div>
      <div :class="$style.subscription">
        <span>
          <icon name="sub" :scale="2"></icon>
        </span>
        <input type="text" placeholder="输入邮箱，回车订阅">
      </div>
      <panel :title="attentionTitle" :class="$style.attention">
        <ul>
          <li>
            <nuxt-link to="/about" :class="$style.head">
              <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/1522954804894-3433-8894.png?x-oss-process=style/repo-50" alt="">
            </nuxt-link>
            <span :class="$style.time">
              <icon name="time" :scale="1.5"></icon>
              <i>23小时前</i>
            </span>
            <i>标识在用</i>
            <nuxt-link to="/about" :class="$style.icon">
              <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/160630185525-33-1.png?x-oss-process=style/repo-50" alt="">
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" :class="$style.head">
              <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/1522954804894-3433-8894.png?x-oss-process=style/repo-50" alt="">
            </nuxt-link>
            <span :class="$style.time">
              <icon name="time" :scale="1.5"></icon>
              <i>23小时前</i>
            </span>
            <i>标识在用</i>
            <nuxt-link to="/about" :class="$style.icon">
              <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/160630185525-33-1.png?x-oss-process=style/repo-50" alt="">
            </nuxt-link>
          </li>
        </ul>
      </panel>
      <panel :title="themeTitle" :class="$style.theme">
        <ul :class="$style.Text">
          <li :class="$style.vue"><nuxt-link to="/about" ><h4>Vue</h4></nuxt-link></li>
          <li :class="$style.bootstarp"><nuxt-link to="/about" ><h4>Bootstarp</h4></nuxt-link></li>
          <li :class="$style.react"><nuxt-link to="/about" ><h4>React</h4></nuxt-link></li>
        </ul>
      </panel>
      <panel :title="releaseTitle" :class="$style.release">
        <ul>
          <li>
            <nuxt-link to="/about" >
              <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151113202457-39.jpg?x-oss-process=style/repo-50" alt="">
            </nuxt-link>
            <span>
              <h5>amphtml</h5>
              <nuxt-link to="/about" >
                <icon name="label" :scale="2"></icon>
                <span>v4.1.12</span>
              </nuxt-link>
            </span>
            <i>18小时前</i>
          </li>
          <li>
            <nuxt-link to="/about" >
              <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151113202457-39.jpg?x-oss-process=style/repo-50" alt="">
            </nuxt-link>
            <span>
              <h5>amphtml</h5>
              <nuxt-link to="/about" >
                <icon name="label" :scale="2"></icon>
                <span>v4.1.12</span>
              </nuxt-link>
            </span>
            <i>18小时前</i>
          </li>
        </ul>
      </panel>
      <panel :title="websiteTitle" :class="$style.website">
        <ul>
          <li>
            <nuxt-link to="/about">
              <img src="https://ofm2qnhj5.qnssl.com/.nuxt/dist/img/logo-news.be1aab0.png" alt="">
              <span>News</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              <img src="https://ofm2qnhj5.qnssl.com/.nuxt/dist/img/logo-loading.5eb8076.png" alt="">
              <span>Loading</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              <img src="https://ofm2qnhj5.qnssl.com/.nuxt/dist/img/logo-json.9b7a221.png" alt="">
              <span>JSON</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              <img src="https://ofm2qnhj5.qnssl.com/.nuxt/dist/img/logo-gradient.d37a61d.png" alt="">
              <span>Gradient</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">
              <img src="https://ofm2qnhj5.qnssl.com/.nuxt/dist/img/logo-filter.402cc9b.png" alt="">
              <span>Filter</span>
            </nuxt-link>
          </li>
        </ul>
      </panel>
    </aside>
  </section>
</template>

<script>
import slider from '~/components/core/slider.vue'
import panel from '~/components/core/panel.vue'
import axios from '~/plugins/axios'
export default {
  async asyncData () {
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  data () {
    return {
      title: '大牛在用',
      attentionTitle: '大家在关注',
      themeTitle: '专题推荐',
      releaseTitle: '新版发布',
      websiteTitle: '旗下网站',
      items: [{
        href: 'www.baidu.com',
        title: 'ionicons：为 Ionic 定制的优质图标库',
        src: 'https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1522075990941-1-9112.jpg'
      }, {
        href: 'www.baidu.com',
        title: 'tfjs：JavaScript 版本的 TensorFlow 机器学习框架',
        src: 'https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1522822738785-1-3842.png'
      }, {
        href: 'www.baidu.com',
        title: 'docsify：一个基于 Vue 的神奇的文档站点生成器',
        src: 'https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1522073007754-1-9803.jpg'
      }, {
        href: 'www.baidu.com',
        title: 'tabler：构建在 BootStrap 4 之上的免费的 HTML 控制面板框架',
        src: 'https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1521032852550-1-1689.png'
      }, {
        href: 'www.baidu.com',
        title: 'wepy：腾讯团队推出的小程序组件化开发框架',
        src: 'https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1522225288342-1-7410.png'
      }, {
        href: 'www.baidu.com',
        title: 'rough：手绘出粗略草图的效果',
        src: 'https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1522136668953-1-8588.png'
      }]
    }
  },
  head () {
    return {}
  },
  components: {
    slider,
    panel
  }
}
</script>

<style lang="scss" module>
@import "~assets/sass/mixin.scss";
.container{
  padding: 110px 0;
  font-size: 16px;
  margin: 0 auto;
  width: 968px;
  @media screen and (max-width: 970px) {
    width: 636px;
  }
  @media screen and (max-width: 576px) {
    width: 380px;
  }
  > article {
    float: left;
    width: 636px;
    padding:0 30px 100px 0;
    @media screen and (max-width: 576px) {
      width: 100%;
    }
    .webSearch {
      background-color: white;
      position: relative;
      input {
        border: 0;
        text-indent: 28px;
        height: 86px;
        width: 100%;
        font-size: 16px;
      }
      .searchIcon {
        position: absolute;
        height: 86px;
        right: 8px;
        color: #987a62;
      }
      @media screen and (max-width: 970px) {
        display: none;
      }
    }
    .slider {
      width: 100%;
      height: 300px!important;
      margin-top: 12px;
      position: relative;
      overflow: hidden;
      .swiper {
        width: 100%;
        height: 300px!important;
      }
      h4 {
        position: absolute;
        top: 238px;
        left: 30px;
        font-weight: bold;
        font-size: 20px;
        color: gray;
      }
      img {
        width: 636px;
        @media screen and (max-width: 576px) {
          width: 380px;
        }
      }
    }
    .homeList {
      margin-top: 10px;
      background-color: white;
      li {
       position: relative;
       height:140px;
       border-bottom: 1px solid #F5F5F5;
      }
      li > div{
        display: inline-block;
      }
      li .img {
        position:absolute;
        left:20px;
        top:50%;
        transform: translateY(-50%);
        img {
          width: 70px;
          height: 70px;
        }
      }
      li .Overview {
        position:absolute;
        left:100px;
        top:50%;
        transform: translateY(-50%);
        h4 a{
          font-size: 16px;
          font-weight: bold;
        }
        .title {
          color: #1988FF;
        }
        .des {
          font-size: 12px;

        }
        p {
          padding-top: 14px;
        }
      }
    }
  }
  > aside {
    float: left;
    width: 302px;
    @media screen and (max-width: 970px) {
      width: 636px;
    }
    @media screen and (max-width: 576px) {
      width: 100%;
    }
    .Powerful {
      h4 {
        text-align: left;
        text-indent: 10px;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid #F4F4F4;
      }
      > div {
        height: 238px;
        // padding: 20px 0;
        margin-bottom: 20px;
        text-align: center;
        > div {
          padding-bottom: 14px;
        }
        .name {
          padding-bottom: 24px;
        }
        .uses {
          width: 94px;
          height: 30px;
          line-height: 30px;
          background-color: #FFE9CC;
          color: #C06C00;
          text-align: center;
          font-size: 13px;
          margin: 0 auto;
        }
        ul {
          padding-top: 30px;
        }
        ul li {
          position: relative;
          display: inline-block;
          margin-right:14px;
          width: 40px;
          height: 40px;
          line-height: 40px;
          border-radius: 40px;
          border: 1px solid #7b767659;
          @media screen and (max-width: 970px) {
            margin-right: 70px;
          }
          @media screen and (max-width: 576px) {
            margin-right: 26px;
          }
          img {
            width: 30px;
            height: 30px;
            vertical-align: middle;
            position: absolute;
            top: 50%;
            transform: translate(-50%,-50%);
            border-radius: 30px;
            // transition: all .3s ease-in .1s;
            &:hover {
              transform: translate(-50%,-50%) scale(1.38);
            }
          }
        }
        ul li:last-child {
          margin-right: 0;
        }
      }
    }
    .contact {
      height: 70px;
      background-color: #fff;
      font-size: 13px;
      position: relative;
      .contactIcon,a {
        display: inline-block;
        @include vertical-center();
      }
      .contactIcon {
        left: 26px;
        color: #444;
        svg:hover {
          color: #DA552F;
        }
      }
      a {
        left: 64px;
      }
      strong {
        font-weight: bold;
      }
    }
    .FrontEnd {
      padding-top: 20px;
      > a {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 88px;
        background-color: #fff;
        .FrontImg {
          @include vertical-center();
          left: 20px;
        }
        .FrontText {
          @include vertical-center();
          left: 80px;
          strong,i {
            display: block;
          }
          strong {
            font-weight: bold;
          }
          i {
            padding-top: 6px;
            font-size: 12px;
            color: rgb(151, 151, 151);
          }
        }
      }
      span {
        display: inline-block
      }
    }
    .subscription {
      height: 70px;
      margin-top: 20px;
      background-color: #fff;
      position: relative;
      span,input {
        @include vertical-center();
      }
      span {
        left: 22px;
        color: black;
      }
      input {
        border: none;
        left: 53px;
      }
    }
    .attention {
      margin-top: 20px;
      h4 {
        text-align: left;
        text-indent: 10px;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid #F4F4F4;
      }
      ul {
        padding:14px 0;
        li {
          height: 40px;
          line-height: 40px;
          .head {
            padding-left: 20px;
          }
          .head img {
            display: inline-block;
            vertical-align: middle;
            width: 25px;
            height: 25px;
            border-radius: 25px;
          }
          .icon img {
            display: inline-block;
            vertical-align: middle;
            width: 20px;
            height: 20px;
            border-radius: 20px;
          }
          .time {
            vertical-align: middle;
            display: inline-block;
            position: relative;
            height: 22px;
            line-height: 22px;
            padding: 0 6px;
            margin-left: 8px;
            margin-right: 10px;
            font-size: 13px;
            text-align: center;
            color: #849c9f;
            background-color: #F1FBFF;
            svg {
              @include vertical-center();
            }
            i {padding-left: 18px;}
          }
          > i { font-size: 13px; padding-right: 6px;}
        }
      }
    }
    .theme {
      margin-top: 20px;
      > h4 {
        text-align: left;
        text-indent: 10px;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid #F4F4F4;
      }
      .Text {
        height: 370px;
        padding: 30px;
        box-sizing: border-box;
        li {
          width: 242px;
          height: 90px;
          line-height: 90px;
          margin: 0 auto 20px;
          font-size: 16px;
          background-size: cover;
          background-position: left top -18px;
          @media screen and (max-width: 970px) {
            width: 100%;
            background-position: left top -100px;
          }
        }
        li a {
          display: inline-block;
          width: 100%;
          height: 100%;
          color: #fff;
          text-align: center;
          background-color: #33333378;
          &:hover {
            background-color: #333333cc;
          }
        }
        li a h4 {
          font-weight: bold;
        }
        li.vue {
          background-image: url("https://awesomes.oss-cn-beijing.aliyuncs.com/subject/160508225211-60-1.jpg?x-oss-process=style/subject");
        }
        li.bootstarp {
          background-image: url("https://awesomes.oss-cn-beijing.aliyuncs.com/subject/160112005719-92-1.jpg?x-oss-process=style/subject");
        }
        li.react {
          margin-bottom: 0;
          background-image: url("https://awesomes.oss-cn-beijing.aliyuncs.com/subject/160112120100-26-1.jpg?x-oss-process=style/subject");
        }
      }
    }
    .release {
      margin-top: 20px;
      text-align: right;
      > h4 {
        text-align: left;
        text-indent: 10px;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid #F4F4F4;
      }
      > ul{
        padding: 18px 0;
      }
      li {
        height: 60px;
        position: relative;
        line-height: 60px;
        font-size: 13px;
        text-align: left;
        > a {
          padding-left: 20px;
        }
        img {
          width: 36px;
          height: 36px;
          vertical-align: middle;
        }
        > span {
          display: inline-block;
          padding-left: 10px;
          text-align: left;
          width: 146px;
          overflow: hidden;

          @include vertical-center();
          h5 {
            height: 26px;
            text-align: left;
            text-overflow:ellipsis;
          }
          > a {
            position: relative;
            color: #0275DF;
            > svg {
              @include vertical-center();
            }
            > span {
              padding-left: 22px;
            }
          }
        }
        > i {
          vertical-align: middle;
          display: inline-block;
          width: 226px;
          padding-right: 20px;
          text-align: right;
        }
      }
    }
    .website {
      margin-top: 20px;
      > h4 {
        text-align: left;
        text-indent: 10px;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid #F4F4F4;
      }
      ul {
        height: 110px;
        text-align: center;
        display:table-cell;
        vertical-align: middle;
        padding: 8px 26px 0 26px;
        box-sizing: border-box;
        @media screen and (max-width: 970px) {
          display:block;
          background-position: left top -100px;
          padding: 20px 26px;
        }
      }
      ul li {
        width: 40px;
        padding: 0 5px;
        text-align: center;
        display: inline-block;
        font-size: 13px;
        @media screen and (max-width: 970px) {
          padding: 0 36px;
        }
        @media screen and (max-width: 576px) {
          padding: 0 12px;
        }
        span {
          display: inline-block;
          padding-top: 10px;
        }
      }
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
  a {
    color: #444;
    &:hover {
      color: #DA552F;
    }
  }
}

</style>
