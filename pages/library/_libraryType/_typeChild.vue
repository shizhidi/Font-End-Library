<template>
<section :class="$style.container">
    <div>
        <ul :class="$style.librayMenu">
            <li>
                <nuxt-link to="/" :class="$style.active">
                    <icon name="application" :scale="3"></icon><span>应用</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="mobil" :scale="3"></icon><span>移动端</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="multimedia" :scale="3"></icon><span>多媒体</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="dom" :scale="3"></icon><span>Dom</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="img" :scale="3"></icon><span>图像图表</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="nodejs" :scale="3"></icon><span>Node.js</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="form" :scale="3"></icon><span>表单</span></nuxt-link>
            </li>
        </ul>
        <ul :class="$style.libraryMenuSon" v-show="currentMenu == 'app'">
            <li>
                <nuxt-link to="/">
                    <icon name="frame" :scale="3"></icon><span>框架</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="structure" :scale="3"></icon><span>构建工具</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="module" :scale="3"></icon><span>模块加载</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="Hold-all" :scale="3"></icon><span>包管理器</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="template" :scale="3"></icon><span>模板引擎</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="test" :scale="3"></icon><span>测试框架</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="tool" :scale="3"></icon><span>实用工具</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="Develop" :scale="3"></icon><span>开发助手</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="Preprocess" :scale="3"></icon><span>( 预 )处理器</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="game" :scale="3"></icon><span>游戏引擎</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="highlight" :scale="3"></icon><span>代码高亮</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="inspect" :scale="3"></icon><span>代码检查</span></nuxt-link>
            </li>
        </ul>
        <ul :class="$style.libraryMenuSon" v-show="currentMenu == 'mobil'">
            <li>
                <nuxt-link to="/">
                    <icon name="application" :scale="3"></icon><span>应用</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="tool" :scale="3"></icon><span>实用工具</span></nuxt-link>
            </li>
        </ul>
        <ul :class="$style.libraryMenuSon" v-show="currentMenu == 'multimedia'">
            <li>
                <nuxt-link to="/">
                    <icon name="audio" :scale="3"></icon><span>音频</span></nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <icon name="movie" :scale="3"></icon><span>视频</span></nuxt-link>
            </li>
        </ul>
        <div :class="$style.screen">
            <span :class="$style.screen_left_line"></span>
            <span :class="$style.screen_filter">
            <nuxt-link to="/" :class="$style.active">热门</nuxt-link>
            <nuxt-link to="/">评分</nuxt-link>
            <nuxt-link to="/">最新</nuxt-link>
            <nuxt-link to="/">趋势</nuxt-link>
        </span>
            <span :class="$style.screen_right_line"></span>
        </div>
        <ul :class="$style.librayList">
            <li>
                <nuxt-link to="/libraryOne/facebook/react"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151011005628-65-1.jpg?x-oss-process=style/subject_repo" alt=""></nuxt-link>
                <span>
                <h4><nuxt-link to="/">react</nuxt-link></h4>
                <p :class="$style.librayList_des">Facebook 推出的一款声明式的，高效的，灵活的用于创建用户界面的JavaScript 库</p>
                <p :class="$style.librayList_button">
                <nuxt-link to="/" :class="$style.librayList_button_left" title="在用"><icon name="users" :scale="3"></icon><span>83</span></nuxt-link>
                <nuxt-link to="/" :class="$style.librayList_button_right" title="喜欢">
                    <icon name="heart" :scale="3"></icon><span>83</span></nuxt-link>
                </p>
                </span>
                <nuxt-link to="/score" :class="$style.score">100</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151011135942-0-1.jpg?x-oss-process=style/subject_repo" alt=""></nuxt-link>
                <span>
                <h4><nuxt-link to="/">vue</nuxt-link></h4>
                <p :class="$style.librayList_des">一个用以创建用户接口的直观、快速、简洁的 MVVM 框架</p>
                <p :class="$style.librayList_button">
                    <nuxt-link to="/" :class="$style.librayList_button_left"><icon name="users" :scale="3"></icon><span>83</span></nuxt-link>
                <nuxt-link to="/" :class="$style.librayList_button_right">
                    <icon name="heart" :scale="3"></icon><span>83</span></nuxt-link>
                </p>
                </span>
                <nuxt-link to="/score" :class="$style.score">100</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151007151721-11-1.png?x-oss-process=style/subject_repo" alt=""></nuxt-link>
                <span>
                <h4><nuxt-link to="/">angular.js</nuxt-link></h4>
                <p :class="$style.librayList_des">Google推出的MVVM框架</p>
                <p :class="$style.librayList_button">
                <nuxt-link to="/" :class="$style.librayList_button_left"><icon name="users" :scale="3"></icon><span>83</span></nuxt-link>
                <nuxt-link to="/" :class="$style.librayList_button_right">
                    <icon name="heart" :scale="3"></icon><span>83</span></nuxt-link>
                </p>
                </span>
                <nuxt-link to="/score" :class="$style.score">100</nuxt-link>
            </li>
        </ul>
    </div>
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
    background-color: #FFFFFF;
    >div {
        width: 870px;
        padding: 60px 0 110px 0;
        margin: 0 auto;
        background-color: #FFFFFF;
        .librayMenu,
        .libraryMenuSon {
            text-align: center;
            padding: 20px 0;
        }
        .librayMenu li,
        .libraryMenuSon li {
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
                }
                ;
                &.active {
                    color: #DA552F;
                    span {
                        font-weight: bold;
                    }
                }
            }
            &:first-child {
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
        .screen {
            height: 60px;
            line-height: 60px;
            font-size: 13px;
            text-align: center;
            span {
                vertical-align: middle;
                display: inline-block;
            }
            .screen_left_line,
            .screen_right_line {
                width: 328px;
                border-bottom: 1px solid #EEEEEE;
            }
            .screen_filter {
                >a {
                    padding-left: 20px;
                    &:last-child {
                        padding-right: 20px;
                    }
                    &.active {
                        color: #DA552F;
                        span {
                            font-weight: bold;
                        }
                    }
                }
            }
        }
        .librayList {
            padding-bottom: 100px;
            width: 870px;
            li {
                width: 870px;
                position: relative;
                height: 130px;
                padding: 12px 0;
                box-sizing: border-box;
                >a {
                    display: inline-block;
                    img {
                        width: 80px;
                        height: 80px;
                    }
                }
                >span {
                    display: inline-block;
                    padding-left: 16px;
                    h4 {
                        padding-bottom: 6px;
                        a {
                            font-size: 22px;
                            font-weight: 600;
                        }
                    }
                    .librayList_des {
                        font-size: 13px;
                        color: #666;
                        height: 26px;
                        line-height: 26px;
                    }
                    .librayList_button {
                        display: inline-block;
                        font-size: 12px;
                        >a {
                            display: inline-block;
                            position: relative;
                            width: 50px;
                            height: 24px;
                            line-height: 24px;
                            text-align: center;
                            border: 1px solid #EDF0F4;
                            svg {
                                @include vertical-center();
                                left: 8px;
                                width: 15px;
                                height: 15px;
                            }
                            span {
                                padding-left: 16px;
                            }
                        }
                        .librayList_button_left {
                            margin-right: 10px;
                        }
                    }
                }
                > .score {
                    width: 26px;
                    height: 26px;
                    border-radius: 26px;
                    line-height: 26px;
                    font-size: 12px;
                    color: #35BD3A;
                    text-align: center;
                    border: 2px solid #35BD3A;
                    background-color: white;
                    display: inline-block;
                    @include vertical-center();
                    right: 0;
                }
            }
        }
    }
}
</style>