import { useState } from 'react';
import './app.css';
function App(){
    const [counter,setCounter] = useState(1);

    const addHandler =()=>{
        setCounter((preCounter)=>{
            return preCounter + 1;
        });
    }
    const jianHandler = ()=>{
        setCounter((preCounter)=>{
            return preCounter - 1;
        });
    }

    return <div className={'app'}>
        <h1>{counter}</h1>
        <button onClick={jianHandler}>-</button>
        <button onClick={addHandler}>+</button>
    </div>
}
export default App;