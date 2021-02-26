import React from 'react'
import classes from "./CardSmall.module.scss"

const CardSmall = ({date,icon,top,buttom})=>{ 
return (
    <div className={`${classes.CardWather}`}>
        <span>{date}</span>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
        <div>
            <span>{top}</span>
            <span className={classes.Buttom}>{buttom}</span>
        </div>
    </div>
) 
}

export default CardSmall
