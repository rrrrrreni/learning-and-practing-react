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



## 四、React组件

### 1.函数式组件

在组件中 const logs = () =>{

​			return <组件>

}

参考04_react_component

### 2.类组件

```
import React from 'react';
//类组件必须要继承component
class App extends React.Component{
    // 类组件中必须添加一个render方法 且方法的返回值要是jsx
    render(){
        return <div>我是类组件！！！</div>
    }
}
export default App;
```
## 五、事件
<button onclik={()=>alert("123")}>点一下</button>

### 1.取消默认行为
const clickHandler = (event)=>{
  event.preventDefault();//取消默认行为
  event.stopPropagation();//取消事件的冒泡
}

## 六、props传值

父组件：logs -> <logitem text="124"></logitem>

子组件：const logitem = (props)=>{

​			参数可以直接用：props.text

​			props 是对象

}

* props是只读的 不能修改属性 所以 -> props.desc = "xxx"是错误的

  注意：1.一般遍历 我们使用data.map()；

  ​			2.一般key，我们使用 自定义的id，不用index；

  ​			3.一般我们不在jsx里面写大量的代码，在外面定义，再放进来就好；
  
  使用props.children() 获取标签体的数据

## 七、state

1.问题：在react中，当组件渲染完毕后，再修改组件的变量，不会重新渲染

要使得组件可以受到变量的影响，必须在变量修改后对组件进行重新渲染

2.解决：react提供了state供我们去修改变量，即实现组件的重新调用；

3.useState 返回了两个值：一个是自定义的初始化的数字1；还有个是函数，修改sate会触发组件的重新渲染，并且使用组件中的值作为新的sate值；即钩子；

```js
const result = useState(1);//初始化数字
let counter = result[0];//赋初始化值
let setCounter = result[1];//设置函数
//使用解构赋值
const [counter,setCounter] = useState(1);
//通过函数修改：
setCounter(counter+1);
```

### state使用时的注意事项

1.只有state发生变化时，组件才会重新渲染；否则不会发生变化

eg：setCounter(2) 初始值也为2，那不会发生变化；

2.当state的值是一个对象时，修改时是使用新的对象替换已有对象； 

解决：一般使用浅拷贝解决，重新创建一个新的对象；

```js
const [user,setUser] = useState({name:'RR',age:18});
const newUser = object.assign({},user);
newUser.name = 'dd';
setUser(newUser);

//简单写法
setUser({...user,name:'dd'})
```

3.通过setState修改一个state时，并不表示修改当前的state，而是下一次渲染counter的值；

带来计算错误的问题：就会出现，如果快速点击，下一次渲染还没执行，就拿原来的counter去执行，出现点击了四次，只加到3的情况；

setState（）会触发组件的重新渲染，它是异步的/

解决方法：设置一个precounter，即保证每次调用的是新值；

```js
set((precounter)=>{
	return precounter +1;
})
```

## 八、useRef（）钩子函数

获取原生dom对象，最好别改，读取可以、获取焦点也可以，否则会有性能问题。

1.获取哪个元素，就给该元素加 ref="h1Ref" id="header";

2.const h1ref = useRef();(也可以自己创建，自己创建重新渲染时，对象会改变)

（用useRef（）对象不会因为组件的重新渲染而改变）
