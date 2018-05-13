<template>
 <section :class="$style.container">
   <div>
     <header>
       <h4>Front End News Center</h4>
       <p>每天刷一刷，跟上前端快步伐</p>
     </header>
     <ul>
       <li class="clearfix">
        <Btn :class="$style.useful"><icon name="useful" :scale="2"></icon><span>0</span></Btn>
        <div>
          <p>一副纯手工用 HTML 和 CSS 打造的十八世纪油画的风格绘画（考验电脑性能的时候到了）</p>
          <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/news/1525338129563-1-3963.jpg" alt="">
        </div>
        <Btn :class="$style.userIcon"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/1512555520304-1-3230.png?x-oss-process=style/repo-50" alt=""><span>3</span></Btn>
       </li>
       <li class="clearfix">
        <Btn :class="$style.useful"><icon name="useful" :scale="2"></icon><span>65</span></Btn>
        <div>
          <p>carbon 是一个用来生成代码截图的网站，通常大家在 Twitter 上看到的代码美图就是用它来做的。carbon 支持多种颜色主题和几乎所有编程语言的高亮显示</p>
          <img src="https://awesomes.oss-cn-beijing.aliyuncs.com/news/1524880031366-2015-313.png" alt="">
        </div>
        <Btn :class="$style.userIcon"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/170605164128-26-2015.jpg?x-oss-process=style/repo-50" alt=""><span>30</span></Btn>
       </li>
     </ul>
     <Btn :class="$style.loadmore">LOAD MORE</Btn>
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
   padding: 90px 0 110px 0;
   > div {
     width: 800px;
     margin: 0 auto;
     header {
       height: 98px;
       text-align: center;
       color: #fff;
       background-color: #E57629;
       h4 {
         font-size: 26px;
         font-weight: bold;
         padding: 20px 0 14px 0;
       }
       p {
         font-size: 13px;
       }
     }
     ul {
       li {
         box-sizing: border-box;
         padding: 35px 32px;
         margin-bottom: 20px;
         background-color: #fff;
         .useful {
           float: left;
           width: 18px;
           height: 40px;
           padding: 12px 10px 0 10px;
           color: gray;
           text-align: center;
           background-color: #F5F5F5;
           svg {
             width: 18px;
             height: 18px;
           }
           span {
            overflow: hidden;
           }
         }
         > div {
           width: 630px;
           padding-left: 18px;
           display: inline-block;
           p {
             line-height: 28px;
           }
           img {
             max-width: 80%;
             cursor: zoom-in;
           }
         }
         .userIcon {
           position: relative;
           float: right;
           padding: 0;
           background-color: transparent;
           img {
             width: 30px;
             height: 30px;
             border-radius: 30px;
           }
           span {
             position: absolute;
             right: -14px;
             top: -10px;
             display: inline-block;
             width: 24px;
             height: 24px;
             line-height: 24px;
             border-radius: 24px;
             background-color: #51A7F2;
           }
         }
       }
     }
     .loadmore {
       width: 100%;
       height: 50px;
       padding: 0;
       line-height: 50px;
       font-size: 13px;
       background-color: #4E97F4;
     }
   }
 }
</style>
