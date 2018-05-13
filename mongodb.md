## MongoDB数据库表

### 用户列表-users

``` json
{
  _id : ObjectId("59f96344bd9d6a6ae2edc7a6"),
  username: '小明',
  password: 'xxxx',
  email: 'sss@qq.com',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
  headImg: './dffdfsdf',
  city: '上海',
  home: '个人主页',
  github: 'http://xxxxx.github.com',
  twitter: '',
  weibo: '',
  sex: 1,
  informations: []
  __v: 0,
}
```

### 分类表-Categories
``` json
{
  _id : ObjectId("59f96344bd9d6a6ae2edc7a6"),
  name: 'applications',
  children:[{
    _id: ObjectId("59f96344bd9d6a6ae2edc7a6"),
    name: frameworks
  }]
}
```

### 前端库表-libraries
``` json
{
  _id : ObjectId("59f96344bd9d6a6ae2edc7a6"),
  score: 80,
  title: 'react',
  subTitle: 'Facebook 推出的一款声明式的，高效的，灵活的用于创建用户界面的JavaScript 库',
  mdImg: '',
  smImg: '',
  bgImg: '',
  content: '',
  githubLink: '',
  website: '',
  createTime: 12345567,
  updateTime: 12434234,
  chatRoomLink: 'https://xxxx.xxx.xxx',
  stackoverflow: 'https://xxxx.xxx.xx',
  subject: 'vue'
}
```

### 主题表-subjects
``` json
{
  _id : ObjectId("59f96344bd9d6a6ae2edc7a6"),
  title: 'vue',
  description: '这是一个怎样很好的主题'，
  image: ''
}
```

### 行为表-actions
``` json
{
  _id : ObjectId("59f96344bd9d6a6ae2edc7a6"),
  userId: 12345,
  useTime: 时间戳,
  libraryId: ObjectId("59f96344bd9d6a6ae2edc7a6"),
  type: 1 / 2     //1表示在用，2表示收藏
}
```

### 消息表-informations
``` json
{
  _id : ObjectId("59f96344bd9d6a6ae2edc7a6"),
  userId: ObjectId("59f96344bd9d6a6ae2edc7a6")
  commentId: ObjectId("xxxx"),
  status: 0,     //0 为未读，1已读
}
```

### 评论表-comments
``` json
{
  _id : ObjectId("59f96344bd9d6a6ae2edc7a6"),
  content : "这是一个条评论",
  commendation: 20,
  libraryId : ObjectId("59f962edbd9d6a6ae2edc7a5"),
  authorId : ObjectId("59f9629bbd9d6a6ae2edc7a2"),
  publishedOn : '时间戳',
  commentState : "published"
}
```
