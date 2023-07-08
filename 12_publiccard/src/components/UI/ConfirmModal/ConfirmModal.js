import BackDrop from "../BackDrop/BackDrop"
import "../ConfirmModal/ComfirmModal.css"
import Card from '../card/card'
const ComfirmModal = props => {
    return <BackDrop>
        <Card className="comfirmModal">
            <div className="confirmText">
                <p>{props.comfirmText}</p>
            </div>                     
            <div className="comfirmButton">
                <button onClick={props.onOk}>确认</button>
                <button onClick={props.onCancel}>取消</button>

            </div>
        </Card>
    </BackDrop>
}

export default ComfirmModal;