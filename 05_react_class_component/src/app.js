import React from 'react';
//类组件必须要继承component
class App extends React.Component{
    // 类组件中必须添加一个render方法 且方法的返回值要是jsx
    render(){
        return <div>我是类组件！！！</div>
    }
}
export default App;