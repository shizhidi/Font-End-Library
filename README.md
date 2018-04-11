# library 前端资源库

> Nuxt.js project  仿照 https://www.awesomes.cn 项目

### 项目技术架构
- nuxt
- vue
- vue-router
- vuex
- axios
- scss
- webpack
- mongodb
- mongoose
- express
- pm2


## PC
--后续添加项目图

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```


## Todos 记录

- ~~基于nuxt框架搭建项目完成~~
- ~~scss基础样式完成~~
- ~~header 组件完成~~
- ~~footer 组件完成~~
- ~~首页vue样式页面完成~~
- fav.ico 设计
- ~~添加viewport.js 适配移动端 rem 布局方案 动态修改html font-size~~
- ~~基于vue-awesome-swiper 完成轮播组件~~
- ~~添加vue-svg-icon 使用svg图标方案~~
- 前端库栏目样式
- 大家在用栏目样式
- 主题栏目样式
- 场景栏目样式
- 最新资讯栏目样式
- 前端TOP栏目样式
- 数据库设计
- 登陆功能完成
- 数据的抓取
- 后续再添加~~~~~~~~~~~~~
## 目录结构
```
nuxt.js-library/
   |
   ├──assets/                    * webpack处理的静态资源
   |
   ├──components/                * 所有组件
   │   │
   │   │──core                   * 核心组件
   │   │
   │   └──public                 * 公共组件
   │   │
   │   └──*****                  * 其他复用组件
   │
   │──middleware/                * Nuxt.js 中间件
   |
   │
   ├──layouts/                   * Nuxt.js布局模板，默认default，目前不可更改，error为渲染失败模板
   |
   ├──pages/                     * Nuxt.js的页面文件
   │
   │──plugins/                   * 第三方组件和自己的js库
   │
   │──static/                    * 不经编译器处理的静态资源
   │
   │──store/                     * 全局数据状态管理
   │   │
   │   ├──index                  * Vuex根模块 / 中小项目这么分足够用了，项目再大就分模块，引入module模块组
   |   |                
   |   ├──state                  * 存放全局状态树
   |   |                
   |   ├──getters                * 对获取的数据过滤
   |   |                
   |   ├──mutations              * 更改 Vuex 的 store 中的状态的方法
   |   |                
   |   └──actions                * 异步状态的修改
   │
   │──package.json               * npm包信息
   │
   │──.eslintrc.js               * Eslint配置信息
   │
   │──.gitignore                 * Git忽略文件配置
   │
   │──nuxt.config.js             * Nuxt.js程序配置
   │
   │──backpack.config.js         * 扩展webpack配置
   │
   │──ecosystem.config           * pm2部署配置（日志文件的路径需要自行修改）
   │
   └──.editorconfig              * 编码风格配置


For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Backpack

We use [backpack](https://github.com/palmerhq/backpack) to watch and build the application, so you can use the latest ES6 features (module syntax, async/await, etc.).
