import MyDate from "../MyDate/MyDate";
import "./LogItem.css"
const LogItem= ()=>{
    return <div className="item">
        <MyDate/>
        <div className="con">
            <h2 className="wenzi">
                学习React
            </h2>
            <p className="shijian">40min</p>
        </div>
    </div>

}
export default LogItem;