<template>
  <div :class="$style.content">
    <ul>
      <li class="clearfix">
        <div :class="$style.content_love"><icon name="useful" :scale="2"></icon><span>0</span></div>
        <div :class="$style.content_content">
          <p>这个很好啊</p>
          <span>2周前</span>
        </div>
      </li>
      <li class="clearfix">
        <div :class="$style.content_love"><icon name="useful" :scale="2"></icon><span>0</span></div>
        <div :class="$style.content_content">
          <p>这个很好啊</p>
          <span>2周前</span>
        </div>
      </li>
      <li class="clearfix">
        <div :class="$style.content_love"><icon name="useful" :scale="2"></icon><span>0</span></div>
        <div :class="$style.content_content">
          <p>这个很好啊</p>
          <span>2周前</span>
        </div>
      </li>
    </ul>
  </div>
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
  .content {
    padding: 40px;
    box-sizing: border-box;
    ul {
      li {
        margin-bottom: 34px;
        div {
          float: left;
        }
        .content_love {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 30px;
          margin-right: 20px;
          color: #909090;
          background-color: #F5F5F5;
          svg {
            width: 20px;
            height: 20px;
          }
        }
        .content_content {
          font-size: 12px;
          p {
            padding-bottom: 20px;
          }
        }
      }
    }
  }
</style>
