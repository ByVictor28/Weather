import React from 'react'
import classes from "./Button.module.scss"

const Button = ({children,round,click,active})=>{ 
return (
    <button className={`${classes.Button} ${round?classes.Round:""} ${active?classes.Active:""}`} onClick={click}>
        {children}
    </button>
) 
}

export default Button
