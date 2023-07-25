import React from 'react'
import classes from './Meal.module.css'
import Counter from '../../UI/Counter/Counter'

function Meal() {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src='../images/1.png' alt='111' />
            </div>
            <div className={classes.RightBox}>
                <h2 className={classes.Title}>学习学习</h2>
                <p className={classes.Desc}>什么时候学习完成好多好多好多的字字字嘴子子子子子嘴子自知</p>
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>99</span>
                    <Counter/>
                </div>
            </div>

        </div>
    )
}

export default Meal