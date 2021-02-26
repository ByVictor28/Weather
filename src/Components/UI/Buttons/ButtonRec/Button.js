import React from 'react'
import classes from "./Button.module.scss"

const Button = ({children,round,click})=>{ 
return (
    <button className={`${classes.Button} ${round?classes.Round:""}`} onClick={click}>
        {children}
    </button>
) 
}

export default Button
