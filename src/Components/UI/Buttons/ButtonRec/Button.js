import React from 'react'
import classes from "./Button.module.scss"

const Button = ({children,round})=>{ 
return (
    <button className={`${classes.Button} ${round?classes.Round:""}` }>
        {children}
    </button>
) 
}

export default Button
