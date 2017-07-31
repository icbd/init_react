# init ReactJS(15.6.1) with Webpack(3.3.0)
2017-07

## 克隆本项目
执行 ` git clone https://github.com/icbd/init_react.git app_name`

## 初始化
修改 package.json 内的项目信息.
执行 ` npm run init `

## 安装依赖
执行 ` npm i `

## 开发版本构建, 启动本地服务
执行 ` npm  run start`

## 生产版本构建
执行 ` npm  run build`


# 基本架构

```
app/
├── actions # Redux action 生成器
│   └── userinfo.js
├── components # 木偶组件
│   └── readme.md
├── constants # 常量映射
│   ├── actionTypes.js
│   ├── localStoreKey.js
│   └── readme.md
├── containers # 智能组件
│   ├── App.jsx # App 入口
│   ├── Home    # 根路由
│   │   └── index.jsx
│   └── readme.md
├── fetch    # fetch 请求
│   └── get_post.js
├── index.jsx   # 初始化入口, 用于引导Redux和Router
├── index.tmpl.html # 根模板
├── reducers    # Redux reducers
│   ├── index.js # 将分散的reducer汇总一处
│   └── userinfo.js
├── router  # 静态路由(2.8)
│   └── routeMap.jsx
├── static  # 静态资源
│   └── css
│       ├── common.scss # clean up
│       └── global.scss # 全局样式, sass变量
└── util # 工具集
    └── localStore.js # 本地数据存储
```