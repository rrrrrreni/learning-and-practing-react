import MyDate from "../MyDate/MyDate";
import "./LogItem.css"
const LogItem= (props)=>{
    return <div className="item">
        <MyDate date={props.date}/>
        <div className="con">
            <h2 className="wenzi">
                {props.desc}
            </h2>
            <p className="shijian">{props.time}</p>
        </div>
    </div>

}
export default LogItem;