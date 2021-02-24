import React from 'react'
import classes from "./BigCard.module.scss"

const BigCard = ({children})=>{ 
return (
    <div className={classes.BigCard}>
        <span>Wind Status</span>
        <span className={classes.Details}><strong>7</strong>mph</span>
        {children}
    </div>
) 
}

export default BigCard
