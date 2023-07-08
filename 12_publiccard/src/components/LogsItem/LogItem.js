import MyDate from "../MyDate/MyDate";
import "./LogItem.css"
import Card from "../UI/card/card.js"
import { useState } from "react";
import ComfirmModal from "../UI/ConfirmModal/ConfirmModal";


const LogItem = (props) => {

    const [showComfirm, setShowConfirm] = useState(false);
    console.log(showComfirm);

    const deleteItemHandler = () => {
        setShowConfirm(true);

        //     const isDelete =  confirm('该操作不可恢复，确认吗？');
        //    if(isDelete){
        //         props.onDelLog();
        //    }
    }

    const CancelHandler =()=>{
        setShowConfirm(false);
    }
     const okHandler = ()=>{
        props.onDelLog();
        setShowConfirm(false);
     }

     /**
      * portal
      *     组件默认会作为父组件的后代渲染到页面中，此时调整层级是没用得
      *         -通过portal可以将组件渲染到页面中的指定位置：
      *         -使用方法：
      *             1.在index.html添加一个新元素
      *             2.修改组件得渲染方式
      *                 -通过ReactDom.createPortal()作为返回值创建元素
      *                 -参数：
      *                     1.jsx
      *                     2.目标位置（DOM元素）
      * 
      * 
      * 
      */

    return (<Card className="item">



        <MyDate date={props.date} />
        <div className="con">
            <h2 className="wenzi">
                {props.desc}
            </h2>
            <p className="shijian">{props.time}</p>
        </div>

        {/* {添加一个删除按钮} */}
        <div>
            <div onClick={deleteItemHandler} className="delete">×</div>
        </div>
        {showComfirm && <ComfirmModal 
        comfirmText="该操作不可恢复，确认删除吗？" 
        onCancel={CancelHandler}
        onOk = {okHandler} />}
    </Card>
    )
}
export default LogItem;