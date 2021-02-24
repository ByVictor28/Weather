import React from 'react'
import Button from '../UI/Buttons/ButtonRec/Button'
import classes from "./Sidebar.module.scss"

const Sidebar = (props)=>{ 
return (
    <div className={classes.Sidebar} style={{backgroundImage:"url(images/Cloud-background.png)"}}>
        <div className={classes.Menu}>
            <Button>Search for places</Button>
            <Button round><i className="fas fa-crosshairs"></i></Button>
        </div>
        <img src="images/Shower.png" alt="whater-icon"/>
        <span className={classes.grades}>15<span className={classes.temperature}>°C</span> </span>
        <span className={classes.deteil}>Shower</span>

        <div className={classes.footer}>
            <span className={classes.fecha}>Today - Fri. 5 Jun</span>
            <span className={classes.location}><i className="fas fa-map-marker-alt"></i> London</span>
        </div>
    </div>
) 
}

export default Sidebar
