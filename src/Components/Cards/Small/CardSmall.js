import React from 'react'
import classes from "./CardSmall.module.scss"

const CardSmall = ({small})=>{ 
return (
    <div className={`${classes.CardWather}`}>
        <span>Yesterday</span>
        <img src="/images/Snow.png" alt=""/>
        <div>
            <span>11°C</span>
            <span>12°C</span>
        </div>
    </div>
) 
}

export default CardSmall
