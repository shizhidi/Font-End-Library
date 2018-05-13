<template>
  <div :class="$style.content">
    <ul class="clearfix">
      <li v-on:mouseenter="index = 0" v-on:mouseleave="index = -1">
        <h4><nuxt-link to="/">apreact</nuxt-link></h4>
        <div :class="$style.content_library" class="clearfix">
          <nuxt-link to="/">
            <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1501119361673-1-5705.png?x-oss-process=style/subject_repo" alt="">
            <i></i>
          </nuxt-link>
          <div>
            <h6>框架</h6>
            <p>
              <icon name="Collection" :scale="3"></icon><span>5</span>
            </p>
          </div>
        </div>
        <p :class="$style.content_des">一个快速轻量的 React 替代方案，具有 ES6 </p>
        <p :class="$style.content_time"><icon name="time" :scale="3"></icon><span>20分钟前</span>
        <a href="javascript:void(0)" title="取消收藏" v-show="index == 0">
          <icon name="cancel" :scale="3"></icon>
        </a>
        </p>
      </li>
      <li v-on:mouseenter="index = 1" v-on:mouseleave="index = -1">
        <h4><nuxt-link to="/">apreact</nuxt-link></h4>
        <div :class="$style.content_library" class="clearfix">
          <nuxt-link to="/">
            <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1501119361673-1-5705.png?x-oss-process=style/subject_repo" alt="">
            <i></i>
          </nuxt-link>
          <div>
            <h6>框架</h6>
            <p>
              <icon name="Collection" :scale="3"></icon><span>5</span>
            </p>
          </div>
        </div>
        <p :class="$style.content_des">一个快速轻量的 React 替代方案，具有 ES6 </p>
        <p :class="$style.content_time"><icon name="time" :scale="3"></icon><span>20分钟前</span>
        <a href="javascript:void(0)" title="取消收藏" v-show="index == 1">
          <icon name="cancel" :scale="3"></icon>
        </a>
        </p>
      </li>
      <li v-on:mouseenter="index = 2" v-on:mouseleave="index = -1">
        <h4><nuxt-link to="/">apreact</nuxt-link></h4>
        <div :class="$style.content_library" class="clearfix">
          <nuxt-link to="/">
            <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1501119361673-1-5705.png?x-oss-process=style/subject_repo" alt="">
            <i></i>
          </nuxt-link>
          <div>
            <h6>框架</h6>
            <p>
              <icon name="Collection" :scale="3"></icon><span>5</span>
            </p>
          </div>
        </div>
        <p :class="$style.content_des">一个快速轻量的 React 替代方案，具有 ES6 </p>
        <p :class="$style.content_time"><icon name="time" :scale="3"></icon><span>20分钟前</span>
        <a href="javascript:void(0)" title="取消收藏" v-show="index == 2">
          <icon name="cancel" :scale="3"></icon>
        </a>
        </p>
      </li>
      <li v-on:mouseenter="index = 3" v-on:mouseleave="index = -1">
        <h4><nuxt-link to="/">apreact</nuxt-link></h4>
        <div :class="$style.content_library" class="clearfix">
          <nuxt-link to="/">
            <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/1501119361673-1-5705.png?x-oss-process=style/subject_repo" alt="">
            <i></i>
          </nuxt-link>
          <div>
            <h6>框架</h6>
            <p>
              <icon name="Collection" :scale="3"></icon><span>5</span>
            </p>
          </div>
        </div>
        <p :class="$style.content_des">一个快速轻量的 React 替代方案，具有 ES6 </p>
        <p :class="$style.content_time"><icon name="time" :scale="3"></icon><span>20分钟前</span>
        <a href="javascript:void(0)" title="取消收藏" v-show="index == 3">
          <icon name="cancel" :scale="3"></icon>
        </a>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: -1
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
  padding: 30px 35px 80px;
  box-sizing: border-box;
  ul {
    margin-right: -30px;
    li {
      float: left;
      width: 166px;
      margin-right: 28px;
      border: 1px solid #ECEFF0;
      h4 {
        height: 40px;
        line-height: 40px;
        padding-left: 16px;
        box-sizing: border-box;
        border-bottom: 1px solid #DADEDC;
        a {
          font-weight: bold;
        }
      }
      .content_library {
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #DADEDC;
        background-color: #FBFAF6;
        > a, > div {
          float: left;
        }
        > a {
          padding:0 15px 0 20px;
          img {
            width: 30px;
            height: 30px;
            border-radius: 30px;
            vertical-align: middle;
          }
          i {
            line-height: 60px;
            vertical-align: middle;
          }
        }
        > div {
          height: 60px;
          font-size: 13px;
          h6 {
            padding: 12px 0 6px 0;
          }
          p {
            display: inline-flex;
            align-items: center;
            vertical-align: middle;
          }
          p svg {
            width: 16px;
            height: 16px;
            margin-right: 3px;
          }
        }
      }
      .content_des {
        height: 50px;
        line-height: 26px;
        padding: 10px 16px;
        font-size: 12px;
        color: #99A0A3;
        border-bottom: 1px solid #DADEDC;
      }
      .content_time {
        padding-left: 18px;
        svg {
          width: 17px;
          height: 17px;
          vertical-align: middle;
        }
        span {
          line-height: 40px;
          font-size: 13px;
          padding-left: 4px;
          vertical-align: middle;
        }
        > a {
          float: right;
          line-height: 40px;
          padding-right: 20px;
          color: #DA552F;
          svg {
            width: 12px;
            height: 12px;
          }
        }
      }
    }
  }
}
</style>
