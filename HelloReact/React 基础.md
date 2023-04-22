# React 基础

## 一、创建react元素
针对render弃用：
const div = React.createElement('div',{},'我是一个div2'，button);
老版本 ReactDOM.render(div,document.getElementById('root'));
新版本：const root = react.createRoot(doucument.getElementById('root));
root.render(buttn)
好处：可以使根元素渲染次数减少，因为一直都是那个根元素 所以可以不需要重复渲染；
## 二、diff算法
在渲染列表时，使用唯一值作为key，可以提高列表渲染的性能，不能用index作为key，index也会改变，所以在涉及顺序改变的时候，不可以用；

## 三、手动创建react项目

* 为开发方便，可以使用react-scripts包（包含webpack与测试）

  ```
  目录结构
  
  -public（存放静态资源）
  
  ​		-index.html (首页的模板)
  
  -src
  
  ​		-App.js
  
  ​		-index.js（脚本入口文件，webpack打包入口）
  ```

  ### 1.初始化react

  > npm init -y

### 2.安装依赖

> npm install  react react-dom react-scripts -S

### 3.打包项目

> npx react-scripts build

### 4.运行项目

> npx react-scripts start