<template>
  <footer :class="$style.footer">
    <section>
      <p>京ICP备14011059号-1 | 本站采用<a href="javascript:void(0)">识共享署名 4.0 国际许可协议 </a>进行许可</p>
      <div>
        <a href="javascript:void(0)">
          <icon name="weibo" :scale="2"></icon>
        </a>
        <a href="javascript:void(0)">
          <icon name="github" :scale="2"></icon>
        </a>
        <a href="javascript:void(0)">
          <icon name="twitter" :scale="2"></icon>
        </a>
        <a href="javascript:void(0)">
          <icon name="sub" :scale="2"></icon>
        </a>
      </div>
    </section>
    <aside>
      <div>
        <a href="javascript:void(0)">关于</a>
        <a href="javascript:void(0)">友情链接</a>
        <a href="javascript:void(0)">联系我们</a>
        <a href="javascript:void(0)">信息无障碍文档共享</a>
      </div>
      <p>由全国的开发者共同维护，打造开放自由免费的高质量前端资源库</p>
    </aside>
  </footer>
</template>
<script>
</script>
<style lang="scss" module>
  .footer {
    height: 138px;
    font-size: 12px;
    color: #8f9eb1;
    background-color: #334259;
    padding-top: 32px;
    @media screen and (max-width: 970px) {
      height: 170px;
      padding-top: 0px;
    }
    section {
      float: left;
      margin-left: 120px;
      @media screen and (max-width: 970px) {
        padding: 20px 0px;
      }
      @media screen and (max-width: 576px) {
        margin-left: 3%;
      }
      div {
        padding-top: 24px;
        > a {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-right : 22px;
        }
      }
    }
    a {
      color: #a6b9d3;
      padding: 0 2px;
      &:hover {
        color: #8f9eb1;
      }
    }
    aside {
      float: right;
      margin-right:130px;
      @media screen and (max-width: 576px) {
        margin-right: 3%;
      }
      > div {
        text-align: right;
        padding-bottom: 20px;
      }
      a {
        padding-right: 24px;
      }
    }
  }
</style>
