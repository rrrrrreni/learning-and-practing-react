import Logs from "./components/Logs/Logs";
import LogsForm from "./components/LogsForm/LogsForm";
import "./app.css"
import { useState } from "react";
// import ComfirmModal from "./components/UI/ConfirmModal/ConfirmModal";
function App() {

    const [logsData,setLogsData] = useState([
            {   id:1,
                date:new Date(2021,5,3,10,30),
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
    )

    const saveLogHandler = (newLog)=>{
        // console.log('App.js -->',newLog);
        newLog.id = Date.now() + '';
        // logsData.push(newLog);
        setLogsData([...logsData,newLog]);
    }

    const delLogByIndex = (index) =>{
        setLogsData(prevState =>{
            const newLogs = [...prevState];
            newLogs.splice(index,1);
            return newLogs
        });
    }

    //因为删除的时候 根据索引删除会出现删不掉得情况
    const delLogById = (id) =>{
        setLogsData(prevState =>{
            return prevState.filter(item => item.id !== id);
        });
    }

    return <div className="app">
        {/* <ComfirmModal /> */}
        <LogsForm onSaveLog={saveLogHandler}/>
        <Logs logsData={logsData} onDelLog = {delLogById} />
    </div>
}

export default App;