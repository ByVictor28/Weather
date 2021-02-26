import React from 'react'
import classes from "./BigCard.module.scss"

const BigCard = ({children,title,number,units})=>{ 
return (
    <div className={classes.BigCard}>
        <span>{title}</span>
        <span className={classes.Details}><strong>{number}</strong>{units}</span>
        <div className={classes.Footer}>
            {children}
        </div>
    </div>
) 
}

export default BigCard
