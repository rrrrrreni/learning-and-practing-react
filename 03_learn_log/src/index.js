import ReactDom from "react-dom/client";
import "./index.css";
const App = <div className="log">
    <div className="item">
        <div className="date">
            <div className="month">
                四月
            </div>
            <div className="day">
                19
            </div>
        </div>
        <div className="con">
            <h2 className="wenzi">
                学习React
            </h2>
            <p className="shijian">40min</p>
        </div>
    </div>
</div>

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(App);