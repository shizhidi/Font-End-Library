<template>
    <section :class="$style.container">
      <div>
          <ul class="clearfix">
            <li style='background-image: url("//awesomes.oss-cn-beijing.aliyuncs.com/subject/160508225211-60-1.jpg?x-oss-process=style/subject");'>
                <nuxt-link to="/">
                    <h3>vue</h3>
                    <p :class="$style.describe">一个数据驱动的组件，为现代化的 Web 界面而生。具有可扩展的数据绑定机制，原生对象即模型，简洁明了的 API 组件化 UI 构建 多个轻量库搭配使用</p>
                    <p :class="$style.library">共125个库</p>
                </nuxt-link>
            </li>
            <li style='background-image: url("//awesomes.oss-cn-beijing.aliyuncs.com/subject/160112005719-92-1.jpg?x-oss-process=style/subject");'>
                <nuxt-link to="/">
                    <h3>Bootstrap</h3>
                    <p :class="$style.describe">Bootstrap 最初是由就职于 Twitter 的一个设计师和一个工程师创造的，现在，Bootstrap 已经成为了这个世界上最流行的前端开发框架和开源项目。</p>
                    <p :class="$style.library">共 25 个库</p>
                </nuxt-link>
            </li>
            <li style='background-image: url("//awesomes.oss-cn-beijing.aliyuncs.com/subject/160112120100-26-1.jpg?x-oss-process=style/subject");'>
                <nuxt-link to="/">
                    <h3>React</h3>
                    <p :class="$style.describe">React 是一个 Facebook 和 Instagram 用来创建用户界面的 JavaScript 库。是为了解决构建随着时间数据不断变化的大规模应用程序。</p>
                    <p :class="$style.library">共82个库</p>
                </nuxt-link>
            </li>
            <li style='background-image: url("//awesomes.oss-cn-beijing.aliyuncs.com/subject/160508225211-60-1.jpg?x-oss-process=style/subject");'>
                <nuxt-link to="/">
                    <h3>vue</h3>
                    <p :class="$style.describe">一个数据驱动的组件，为现代化的 Web 界面而生。具有可扩展的数据绑定机制，原生对象即模型，简洁明了的 API 组件化 UI 构建 多个轻量库搭配使用</p>
                    <p :class="$style.library">共125个库</p>
                </nuxt-link>
            </li>
            <li style='background-image: url("//awesomes.oss-cn-beijing.aliyuncs.com/subject/160112005719-92-1.jpg?x-oss-process=style/subject");'>
                <nuxt-link to="/">
                    <h3>Bootstrap</h3>
                    <p :class="$style.describe">Bootstrap 最初是由就职于 Twitter 的一个设计师和一个工程师创造的，现在，Bootstrap 已经成为了这个世界上最流行的前端开发框架和开源项目。</p>
                    <p :class="$style.library">共 25 个库</p>
                </nuxt-link>
            </li>
            <li style='background-image: url("//awesomes.oss-cn-beijing.aliyuncs.com/subject/160112120100-26-1.jpg?x-oss-process=style/subject");'>
                <nuxt-link to="/">
                    <h3>React</h3>
                    <p :class="$style.describe">React 是一个 Facebook 和 Instagram 用来创建用户界面的 JavaScript 库。是为了解决构建随着时间数据不断变化的大规模应用程序。</p>
                    <p :class="$style.library">共82个库</p>
                </nuxt-link>
            </li>
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
.container {
    padding-top:110px;
    background-color: #FFFFFF;
    > div {
        width: 940px;
        margin: 0 auto;
        ul {
          margin-right: -77px;
          li {
            float: left;
            width: 262px;
            height: 250px;
            margin-right: 77px;
            margin-bottom: 80px;
            text-align: center;
            background-position: center;
            > a {
                display: inline-block;
                height: 100%;
                color: #fff;
                background-color: rgba(51, 51, 51, 0.65059);
                h3 {
                    padding-top:50px;
                    font-size: 26px;
                    font-weight: bold;
                }
                .describe {
                    font-size: 12px;
                    height: 80px;
                    line-height: 36px;
                    padding: 0 20px;
                    overflow: hidden;
                }
                .library {
                    display: inline-block;
                    margin-top: 30px;
                    width: 110px;
                    height: 40px;
                    line-height: 40px;
                    border: 1px solid #fff;
                    font-size: 13px;
                }
                &:hover {
                    background-color: #333333cc;
                }
            }
          }
        }
    }
}
</style>
