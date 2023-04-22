//js的入口文件
// react18做了更新 要有client or server
import ReactDom from "react-dom/client";

//创建一个JSX
const App = <div>
    <h1>This is a React project.</h1>
    <p>Thanks.</p>
</div>

//获取一个根容器
const root = ReactDom.createRoot(document.getElementById('root'));
//将App渲染进根容器
root.render(App);