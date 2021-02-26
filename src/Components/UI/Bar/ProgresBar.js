import React from 'react'
import classes from "./ProgresBar.module.scss"

const ProgresBar = ({porcentage})=>{ 
    const full = 240 * porcentage / 100;


return (
    <div className={classes.ProgresBar}>
        <div className={classes.Labels}>    
            <span>0%</span><span>50%</span><span>100%</span>
        </div>
        <div className={classes.Progres} style={{width:full+"px"}}></div>
        
    </div>
) 
}

export default ProgresBar
