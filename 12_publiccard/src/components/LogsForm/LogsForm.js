import React, { useState } from 'react'
import Card from "../UI/card/card"
import "./LogsForm.css"
export default function LogsForm(props) {
    // let inputDate = '';
    // let inputDesc = '';
    // let inputTime = 0;

    // const [inputDate,setInputDate] = useState('');
    // const [inputDesc,setInputDesc] = useState('');
    // const [inputTime,setInputTime] = useState('');

    const [formData,setFormData] = useState({
        inputDate:'',
        inputDesc:'',
        inputTime:''
    })

// 创建一个响应函数，监听表单项的变化
    const descChangeHandler = (e)=>{
        // event.target执行的是触发事件的对象（DOM对象）
        // setInputDesc(e.target.value);
        setFormData({
            ...formData,
            inputDesc:e.target.value
        })
    }
    const timeChangeHandler = (e)=>{
        // event.target执行的是触发事件的对象（DOM对象）
        // setInputTime(e.target.value);
        setFormData({
            ...formData,
            inputTime:e.target.value
        })

    }
    const dateChangeHandler = (e)=>{
        // event.target执行的是触发事件的对象（DOM对象）
        // setInputDate(e.target.value);
        setFormData({
            ...formData,//浅拷贝
            inputDate:e.target.value
        })

    }
    const formSubmitHandler = (e)=>{
        e.preventDefault();
        const newLog = {
            date: new Date(formData.inputDate),
            desc:formData.inputDesc,
            time:+formData.inputTime
        }
        
        props.onSaveLog(newLog);
        // 清空表单项
        setFormData({
            inputDate:'',
            inputDesc:'',
            inputTime:''
        });
    }
  return (
    <Card className="Logs-Form">
        <form onSubmit={formSubmitHandler}>
            <div className='form-item'>
                <label htmlFor='date'>日期</label>
                <input onChange={dateChangeHandler} value={formData.inputDate} id='date' type='date'></input>
            </div>
            <div className='form-item'>
                <label htmlFor='desc'>内容</label>
                <input onChange={descChangeHandler} value={formData.inputDesc} id='desc' type='text'></input>
            </div>
            <div className='form-item'>
                <label htmlFor='time'>时长</label>
                <input onChange={timeChangeHandler} value={formData.inputTime} id='time' type='number'></input>
            </div>
            <div className='form-btn'>
            <button>添加</button>

            </div>
        </form>
    </Card>
  )
}
