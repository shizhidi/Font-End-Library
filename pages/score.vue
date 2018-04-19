<template>
    <section :class="$style.container">
        <div>
            <h2>GitHub 前端库得分计算规则</h2>
            <p>根据每个前端库的 GitHub 开放数据，我们可以分析出一个大致的得分，目前具体的指标如下（持续完善中，也让其更具有参考价值）：</p>
            <ul>
                <li>是否有 Readme 文件</li>
                <li>是否有 gitignore 文件</li>
                <li>是否有 license 文件</li>
                <li>是否有代码检查 （JS、CSS、HTML的各种 linter）</li>
                <li>是否有主页 homepage</li>
                <li>star fork watch 总数</li>
                <li>项目参与用户数量</li>
                <li>issue 数量和解决率</li>
                <li>release 数量</li>
                <li>最后更新时间</li>
                <li>star fork watch 新增数 trend</li>
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
    margin-top: 60px;
    padding: 50px 0;
    div {
        width: 598px;
        margin: 0 auto;
        padding: 20px 0 40px 0;
        box-shadow: 0 1px 5px #eee;
        background-color: #fff;
        h2 {
            width: 496px;
            height:88px;
            line-height: 88px;
            font-size: 20px;
            font-weight: bold;
            border-bottom: 1px solid #EEEEEE;
            text-align: center;
            margin: 0 auto;
        }
        p {
            width: 496px;
            padding: 32px 0 20px 0;
            line-height: 28px;
            margin: 0 auto;
            color: #a8a8a8;
            font-size: 14px;
        }
        ul {
            padding-left: 50px;
            width: 496px;
            margin: 0 auto;
            font-size: 16px;
            list-style:disc;
            li {
                line-height: 32px;
            }
        }
    }
}
</style>