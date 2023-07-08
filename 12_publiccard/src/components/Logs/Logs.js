import LogItem from "../LogsItem/LogItem";
import "./Logs.css"
import Card from "../UI/card/card"
import LogsFilter from "./LogsFilter/LogsFilter"
import { useState } from "react";
const Logs = (props) => {
    const [year,setYear] = useState(2022);

    let filterData = props.logsData.filter(item => item.date.getFullYear() === year);

    //创建一个修改年份得函数
    const changeYearHandler = (year)=>{
        setYear(year);
    }
    let logItemData = filterData.map((item, index) => <LogItem
        onDelLog={
            () => {
                props.onDelLog(item.id)
            }
        }
        key={item.id}
        date={item.date}
        desc={item.desc}
        time={item.time} />
    );
    if (logItemData.length === 0) {
        logItemData = <p>暂无日志！</p>;
    }
    return <Card className="log">
        <LogsFilter onyearchange={changeYearHandler} year={year}/>
        {logItemData}




    </Card>

}
export default Logs;