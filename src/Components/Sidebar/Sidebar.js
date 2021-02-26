import React from 'react'
import Button from '../UI/Buttons/ButtonRec/Button'
import classes from "./Sidebar.module.scss"

const Sidebar = ({click,currentWeather,units})=>{ 

return (
    <div className={classes.Sidebar} style={{backgroundImage:"url(images/Cloud-background.png)"}}>
        <div className={classes.Menu}>
            <Button click={click} >Search for places</Button>
            <Button round><i className="fas fa-crosshairs"></i></Button>
        </div>
        <img src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`} alt="whater-icon"/>
        <span className={classes.grades}>{currentWeather.temp}<span className={classes.temperature}> {units==="metric"?"°C":"°F"} </span> </span>
        <span className={classes.deteil}>{currentWeather.description}</span>

        <div className={classes.footer}>
            <span className={classes.fecha}>Today - {new Date(currentWeather.date * 1000).toDateString() }</span>
            <span className={classes.location}><i className="fas fa-map-marker-alt"></i>{currentWeather.place}</span>
        </div>
    </div>
) 
}

export default Sidebar
