<template>
 <div :class="$style.content_profile">
   <ul>
     <li class="clearfix">
       <div :class="$style.content_profile_header">头像</div>
       <p :class="$style.content_profile_img">
         <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/1500258263178-545-6694.png?x-oss-process=style/subject_repo" alt=""><Btn :class="$style.header_upload">上传图片</Btn>
       </p>
     </li>
     <li class="clearfix">
       <div>性别</div>
       <p>男</p>
     </li>
     <li class="clearfix" :class="$style.city">
       <div>城市</div>
       <p><input type="text" placeholder="你并不孤单"></p>
     </li>
     <li class="clearfix" :class="$style.city">
       <div>个人主页</div>
       <p><input type="text"></p>
     </li>
     <li class="clearfix" :class="$style.github">
       <div>GitHub</div>
       <p><span>https://github.com/</span><input type="text"><icon name="link" :scale="3"></icon></p>
     </li>
     <li class="clearfix" :class="$style.twitter">
       <div>Twitter</div>
       <p><span>https://twitter.com/</span><input type="text"><icon name="link" :scale="3"></icon></p>
     </li>
     <li class="clearfix" :class="$style.weibo">
       <div>微博</div>
       <p><span>https://weibo.com</span><input type="text"><icon name="link" :scale="3"></icon></p>
     </li>
     <li class="clearfix" :class="$style.submit">
       <div>&nbsp;</div>
       <p><Btn>提交</Btn></p>
     </li>
   </ul>
 </div>
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
.content_profile {
  padding: 50px 70px;
  ul {
    li {
      width: 100%;
      margin-bottom: 30px;
      > div, > p { float: left; font-size: 14px; }
      div.content_profile_header {
        line-height: 150px;
        width: 120px;
      }
      p img {
        margin-right: 20px;
      }
      p .header_upload {
        background-color: #007BFF;
        width: 76px;
        padding: 0;
        border-radius: 0;
        height: 30px;
        line-height: 30px;
        text-align: center;
        vertical-align: 10px;
      }
      > div {
        width: 120px;
        line-height: 32px;
      }
    }
    li.city {
      input {
        width: 562px;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #EEEEEE;
        text-indent: 10px;
      }
    }
    li.github, li.twitter, li.weibo {
      input {
        width: 430px;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #EEEEEE;
        text-indent: 10px;
      }
      svg {
        padding-left: 6px;
        width: 12px;
        height: 12px;
      }
    }
    li.submit {
      a {
        width: 50px;
        line-height: 30px;
        padding: 0;
        border-radius: 0;
        background-color: #007BFF;
      }
    }
  }
}
</style>
