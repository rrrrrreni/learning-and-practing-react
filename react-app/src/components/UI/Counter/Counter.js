import React from 'react'
import classes from './Counter.module.css'
function Counter() {
  return (
    <div>
        <button className={classes.Sub}>-</button>
        <span>2</span>
        <button className={classes.Add}>+</button>

    </div>
  )
}

export default Counter