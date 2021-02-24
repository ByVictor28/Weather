import React from 'react'
import classes from "./ProgresBar.module.scss"

const ProgresBar = (props)=>{ 
    const full = 240;


return (
    <div className={classes.ProgresBar}>
        <div className={classes.Labels}>    
            <span>0%</span><span>50%</span><span>100%</span>
        </div>
        <div className={classes.Progres} style={{width:"120px"}}></div>
        
    </div>
) 
}

export default ProgresBar
