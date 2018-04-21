<template>
    <section :class="$style.container">
        <header>
            <h2>
                <span>react</span>
                <nuxt-link to="/score"><icon name="score" :scale="3"></icon><i>100</i></nuxt-link>
            </h2>
            <P>
							<img src="https://awesomes.oss-cn-beijing.aliyuncs.com/repo/151011005628-65-1.jpg?x-oss-process=style/subject_repo" alt="">
							<span>Facebook 推出的一款声明式的，高效的，灵活的用于创建用户界面的JavaScript 库</span>
						</P>
            <div class="clearfix">
              <Btn :path="GitHub" :class="$style.header_GitHub"><icon name="github" :scale="3"></icon><span>GitHub</span></Btn>
              <Btn :path="Home" :class="$style.header_home"><icon name="home" :scale="3"></icon><span>官网</span></Btn>
              <Btn :path="Home" :class="$style.header_star"><icon name="star" :scale="3"></icon><span>93542</span></Btn>
              <Btn :path="Home" :class="$style.header_star"><icon name="link" :scale="3"></icon><span>17627</span></Btn>
              <Btn :path="Home" :class="$style.header_Collection"><icon name="Collection" :scale="3"></icon><span>53</span></Btn>
              <Btn :path="Home" :class="$style.header_down"><icon name="down" :scale="3"></icon><span>下载</span></Btn>
            </div>
        </header>
        <section :class="$style.content" class="clearfix">
            <main>
              <div :class="$style.content_article"></div>
              <ul :class="$style.content_otherLibrary">
                  <h5>也许你还需要它们</h5>
                  <li style="background-image: url('//awesomes.oss-cn-beijing.aliyuncs.com/repo/151011135942-0-1.jpg?x-oss-process=style/subject_repo');">
                    <nuxt-link to="/">
                    <p>vue</p>
                    <p>一个用以创建用户接口的直观、快速、简洁的 MVVM 框架</p>
                    </nuxt-link>
                  </li>
                  <li style="background-image: url('//awesomes.oss-cn-beijing.aliyuncs.com/repo/151007151721-11-1.png?x-oss-process=style/subject_repo');">
                    <nuxt-link to="/">
                    <p>angular.js</p>
                    <p>Google推出的MVVM框架</p>
                    </nuxt-link>
                  </li>
                  <li style="background-image: url('//awesomes.oss-cn-beijing.aliyuncs.com/repo/1505426407638-2822-1181.png?x-oss-process=style/subject_repo');">
                    <nuxt-link to="/">
                    <p>angular</p>
                    <p>一个开发移动端和桌面端的框架</p>
                    </nuxt-link>
                  </li>
                  <li style="background-image: url('//awesomes.oss-cn-beijing.aliyuncs.com/repo/151113202902-26.jpg?x-oss-process=style/subject_repo');">
                    <nuxt-link to="/">
                    <p>ant-design</p>
                    <p>一套企业级的 UI 设计语言</p>
                    </nuxt-link>
                  </li>
              </ul>
              <div :class="$style.content_comment">
                  <h5>评论区</h5>
                  <p><input type="text" placeholder="我们会认真对待你的想法、建议和反馈"> <Btn :path="GitHub" :class="$style.content_comment_submit"><icon name="submit" :scale="3"></icon><span>提交</span></Btn></p>
                  <ul>
                    <li>
                      <nuxt-link to="/score"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/1506020404747-2657-1687.png?x-oss-process=style/repo-50" alt=""></nuxt-link>
                      <div>
                         <h5><nuxt-link to="/score">HouXingYi</nuxt-link><span>3月前</span></h5>
                         <p :class="$style.content_comment_user">user interface不应该是“用户界面”吗</p>
                         <p :class="$style.content_comment_btn">
                           <Btn :class="$style.praise"><icon name="submit" :scale="3"></icon><span>0</span></Btn>
                           <Btn :class="$style.answer"><icon name="submit" :scale="3"></icon><span>回复</span></Btn>
                         </p>
                      </div>
                    </li>
                    <li>
                      <nuxt-link to="/score"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/1506020404747-2657-1687.png?x-oss-process=style/repo-50" alt=""></nuxt-link>
                      <div>
                         <h5><nuxt-link to="/score">HouXingYi</nuxt-link><span>3月前</span></h5>
                         <p :class="$style.content_comment_user">user interface不应该是“用户界面”吗</p>
                         <p :class="$style.content_comment_btn">
                           <Btn :class="$style.praise"><icon name="submit" :scale="3"></icon><span>0</span></Btn>
                           <Btn :class="$style.answer"><icon name="submit" :scale="3"></icon><span>回复</span></Btn>
                         </p>
                      </div>
                    </li>
                  </ul>
              </div>
            </main>
            <aside>
              <div :class="$style.content_status">
                <p :class="$style.content_status_header">
                  <span></span>
                  <i>积极维护</i>
                </p>
                <p :class="$style.content_status_time">
                  <span>创建于 <i>4年前</i></span>
                  <span>最近更新于 <i>2天前</i></span>
                </p>
                <ul>
                  <li><icon name="chat" :scale="3"></icon><span></span></li>
                  <li><icon name="stackoverflow" :scale="3"></icon><span></span></li>
                </ul>
              </div>
              <div :class="$style.content_category">
                <span><icon name="frame" :scale="3"></icon><nuxt-link to="/score">应用</nuxt-link></span>
                <span><nuxt-link to="/">框架</nuxt-link></span>
              </div>
              <div :class="$style.content_use">
                <div>
                  <nuxt-link to="/">我在用</nuxt-link>
                </div>
                <ul>
                  <li><nuxt-link to="/" title="xx"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/1523905209715-3493-3370.png?x-oss-process=style/repo-50" alt=""></nuxt-link></li>
                  <li><nuxt-link to="/" title="xx"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/1500261180572-2205-3006.png?x-oss-process=style/repo-50" alt=""></nuxt-link></li>
                  <li><nuxt-link to="/" title="xx"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/1523386809451-3461-3258.png?x-oss-process=style/repo-50" alt=""></nuxt-link></li>
                  <li><nuxt-link to="/" title="xx"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/1519671637188-3283-7566.png?x-oss-process=style/repo-50" alt=""></nuxt-link></li>
                  <li><nuxt-link to="/" title="xx"><img src="https://awesomes.oss-cn-beijing.aliyuncs.com/mem/1520967611409-3345-1805.png?x-oss-process=style/repo-50" alt=""></nuxt-link></li>
                </ul>
                <p>等 84 人在用</p>
              </div>
            </aside>
        </section>
    </section>
</template>

<script>
import Btn from '~/components/core/btn.vue'
export default {
  data () {
    return {
      GitHub: '/',
      Home: '/'
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
@import "~assets/sass/mixin.scss";
.container {
  padding-top: 80px;
  header {
    width: 970px;
    height: 202px;
    margin: 0 auto;
    padding: 30px 0 0 30px;
    box-sizing: border-box;
    box-shadow: 0 1px 5px #eee;
    background-color: #fff;
    h2 {
			position: relative;
			height: 50px;
			line-height: 50px;
			span {
        font-size: 30px;
        @include vertical-center();
        font-weight: bold;
			}
			a {
				position: absolute;
				margin-left: 74px;
				height: 50px;
				svg {
					@include vertical-center();
					color: #35BD3A;
					width: 40px;
					height: 40px;
				}
				i {
					@include vertical-center();
					display: inline-block;
					color: white;
					width: 40px;
    			text-align: center;
					z-index: 100;
					font-size: 12px;
				}
			}
		}
		> p {
			height: 40px;
			line-height: 40px;
			font-size: 15px;
			> img {
				width: 23px;
				height: 23px;
				vertical-align: middle;
			}
			> span {
				vertical-align: middle;
			}
    }
    > div {
      padding-top: 16px;
      a svg {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
      a span {
        display: inline-block;
        vertical-align: middle;
        padding-left: 4px;
      }
      .header_GitHub {
        background-color: #007BFF;
      }
      .header_home , .header_star, .header_Collection {
        margin-left: 20px;
      }
      .header_home , .header_star, .header_GitHub {
        float: left;
      }
      .header_star, .header_Collection {
      padding: 8px 10px;
        svg {
          width: 15px;
          height: 15px;
        }
      }
      .header_star {
        color: #60AA60;
        background-color: #F8F9FA;
      }
      .header_down {
        float: right;
        background-color: #17A2B8;
      }
      .header_Collection {
        float: right;
        margin-right: 30px;
        background-color: #6C757D;
      }
    }
	}
	> .content{
    width: 970px;
    padding-top: 20px;
    margin: 0 auto;
    main {
      width: 720px;
      margin-right: 30px;
      float: left;
      .content_article {
        height: 760px;
        background-color: white;
      }
      .content_otherLibrary {
        height: 250px;
        margin-top: 20px;
        padding: 30px;
        box-sizing: border-box;
        background-color: #fff;
        > h5 {
            font-size: 16px;
            font-weight: bold;
            padding-bottom: 20px;
        }
        li {
          float: left;
          width: 142px;
          height: 150px;
          border-radius: 2px;
          box-shadow: 0 0 10px #9b9b9b;
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            text-align: center;
            color: #fff;
            background-color: rgba(51, 51, 51, 0.65059);
            &:hover {
              background-color: #333333cc;
            }
            p {
              width: 100px;
              display: inline-block;
              margin: 0 auto;
            }
            p:first-child {
              margin-top: 42px;
              font-size: 20px;
              height: 32px;
              line-height: 32px;
              border-bottom: 1px solid #fff;
            }
            p:last-child {
              overflow: hidden;
              margin: 6px 0;
              height: 40px;
              line-height: 22px;
              font-size: 12px;
            }
          }
        }
        li + li {
          margin-left: 30px;
        }
      }
      .content_comment {
        margin: 20px 0 50px 0;
        padding: 30px;
        box-sizing: border-box;
        background-color: white;
        > h5 {
          font-size: 16px;
          font-weight: bold;
          padding-bottom: 20px;
        }
        p {
          input {
            width: 570px;
            height: 44px;
            border-radius: 3px;
            outline: none;
            border: 1px solid #DDDDDD;
            text-indent: 10px;
          }
          .content_comment_submit {
            padding: 13px 10px;
            margin-left: 10px;
            border-radius: 0;
            svg {
              width: 20px;
              height: 20px;
              vertical-align: middle;
            }
            span {
              display: inline-block;
              padding-left: 4px;
              vertical-align: middle;
            }
          }
        }
        ul {
          margin-top: 40px;
          li {
            height: 100px;
            position: relative;
            font-size: 13px;
            margin-bottom: 14px;
            > a {
              display: inline-block;
              position: absolute;
              top: 2px;
              img {
                width: 25px;
                height: 25px;
                border-radius: 50%;
              }
            }
            > div {
              padding-left: 36px;
              display: inline-block;
              > h5 {
                a {
                  font-size: 13px;
                  font-weight: bold;
                  padding-right: 12px;
                }
                span {
                  font-size: 13px;
                  color: #B2B2C7;
                }
              }
              .content_comment_user, .content_comment_btn {
                svg {
                  vertical-align: middle;
                }
                span {
                  padding-left: 2px;
                  vertical-align: middle;
                }
              }
              .content_comment_user {
                padding: 14px 0;
              }
              .content_comment_btn {
                .praise {
                  margin-right: 12px;
                  color: #8a8a8a;
                  background-color: #F5F5F5;

                }
                .answer {
                  color: #d2d2d2;
                  background-color: #fff;
                }
              }
            }
          }
        }
      }
    }
    aside {
      float: right;
      width: 220px;
      .content_status {
        font-size: 13px;
        background-color: #fff;
        .content_status_header {
          height: 66px;
          line-height: 66px;
          box-sizing: border-box;
          border-bottom: 1px solid #DEE2E6;
          span {
            display: inline-block;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-left: 20px;
            vertical-align: middle;
            border: 6px solid #D4ECD5;
            background-color: #4CAF50;
          }
          i {
            padding-left: 10px;
            vertical-align: middle;
          }
        }
        .content_status_time {
          height: 92px;
          line-height: 32px;
          padding: 15px 0 15px 20px;
          box-sizing: border-box;
          border-bottom: 1px solid #DEE2E6;
          span {
            display: block;
            i {
              color: #3DAAE3;
            }
          }
        }
        ul {
          height: 60px;
          li {
            height: 100%;
            float: left;
            padding-left: 20px;
            span {
              display: inline-block;
              height: 100%;
              vertical-align: middle;
            }
            svg {
              vertical-align: middle;
              width: 15px;
              height: 15px;
            }
            &:first-child {
              color: #F33F83;
            }
            &:last-child {
              color: #F48024;
            }
          }

        }
      }
      .content_category {
        margin-top: 20px;
        height: 60px;
        background-image: linear-gradient(120deg,rgba(255,255,242,1) 50%,#f8ffe5 0);
        span {
          display: inline-block;
          font-size: 13px;
          height: 60px;
          line-height: 60px;

          svg {
            width: 16px;
            height: 16px;
            padding-left: 20px;
            vertical-align: middle;
          }
          a {
            padding: 20px 0 20px 20px;
            vertical-align: middle;
          }
          &:last-child {
            padding-left: 60px;
          }
        }
      }
      .content_use {
        height: 144px;
        font-size: 13px;
        margin-top: 20px;
        padding: 20px;
        text-align: center;
        box-sizing: border-box;
        background-color: #fff;
        div {
          width: 180px;
          height: 30px;
          margin: 0 auto;
          line-height: 30px;
          a {
            display: inline-block;
            width: 100%;
            color: #fff;
            background-color: #6C757D;
            &:hover {
              background-color: #5A6268;
            }
          }
        }
        ul {
          width: 100%;
          height: 60px;
          padding: 18px 0;
          box-sizing: border-box;
          li {
            display: inline-block;
            margin-left: -6px;
            img {
              width: 24px;
              height: 24px;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }

}
</style>
