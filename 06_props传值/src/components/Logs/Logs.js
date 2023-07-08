import LogItem from "../LogsItem/LogItem";
import "./Logs.css"
const Logs = () => {
    const logsData = [
        {   id:1,
            date:new Date(2022,5,3,10,30),
            desc:"学习vue",
            time:"120"
        },
        {   id:2,
            date:new Date(2022,6,3,10,30),
            desc:"学习webpack",
            time:"120"
        },
        {   id:3,
            date:new Date(2022,7,3,10,30),
            desc:"学习fetch",
            time:"60"
        },
        
    ]
    const logItemData = logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time}/>);
    return <div className="log">
        {
            logItemData
        }      
    
      
        

    </div>

}
export default Logs;