import React,{useState} from 'react'
import Button from '../UI/Buttons/ButtonRec/Button'
import classes from "./Sidebar.module.scss"

const Sidebar = ({click,currentWeather,units,resiveCity})=>{ 

    const [menuOpen, setMenuOpen] = useState(false)
    const [city, setCity] = useState("");

    const OpenMenu = ()=> {
        setMenuOpen(true);
    }
    const CloseMenu = ()=> {
        setMenuOpen(false);
    }
    const sendCity = () => {
        setMenuOpen(false)
        resiveCity(city);
    }
return (
    <div className={classes.Sidebar} style={{backgroundImage:"url(images/Cloud-background.png)"}}>
        <div className={classes.Menu}>
            <Button click={OpenMenu}>Search for places</Button>
            <Button  click={click} round><i className="fas fa-crosshairs"></i></Button>
        </div>
        <img src={`https://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`} alt="whater-icon"/>
        <span className={classes.grades}>{currentWeather.temp}<span className={classes.temperature}> {units==="metric"?"°C":"°F"} </span> </span>
        <span className={classes.deteil}>{currentWeather.description}</span>

        <div className={classes.footer}>
            <span className={classes.fecha}>Today - {new Date(currentWeather.date * 1000).toDateString() }</span>
            <span className={classes.location}><i className="fas fa-map-marker-alt"></i>{currentWeather.place}</span>
        </div>
        <div className={`${classes.Mascara} ${menuOpen?classes.Open:""}`}>
            <i className="fas fa-times" onClick={CloseMenu}></i>
            <div className={`${classes.input} `}>
                <input type="text" placeholder="Seach for a city" value={city} onChange={(e) => setCity(e.target.value)}/>
                <Button click={sendCity}>Seach</Button>
            </div>
        </div>
    </div>
) 
}

export default Sidebar
