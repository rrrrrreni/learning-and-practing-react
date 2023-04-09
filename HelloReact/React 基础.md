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