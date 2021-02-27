import React,{useState}from 'react'
import BigCard from '../Cards/Small/BigCard/BigCard'
import CardSmall from '../Cards/Small/CardSmall'
import ProgresBar from '../UI/Bar/ProgresBar'
import Button from '../UI/Buttons/ButtonRec/Button'
import classes from "./Main.module.scss"

const Main = ({daily,wind,humidity,visibility,pressure,click})=>{
    
    const [metricalActive, setMetricalActive] = useState(true)

    const changeToImperial = () => {
        setMetricalActive(false);
        click("imperial");
        
    }
    
    const changeToMetric = () => {
        setMetricalActive(true);
        click("metric");
        
    }
return (
    <div className={classes.Main}>
        <div className={classes.Control}>
            <Button round click={changeToImperial} active={metricalActive===false} >°F</Button>
            <Button round click={changeToMetric} active={metricalActive===true} >°C</Button>
        </div>
        <div className={classes.List}>
            {daily.map((day,index) => {
                if(index <= 5){
                    return (
                        <CardSmall
                        key={index}
                        date={day.date}
                        icon={day.icon}
                        top={day.top}
                        buttom={day.buttom}
                    />
                    )
                }
                else{
                    return null
                }
            })}
        </div>
        <h1>Today's Hightlights</h1>
        <div className={classes.ListHightlights}>
            <BigCard title="Wind Status" number={wind.pressure} units="mph">
                <Button round><i style={{transform: `rotate(${-225 + wind.deg}deg)`}} className="fas fa-location-arrow"></i></Button>
                <span>WSW</span>
            </BigCard>
            
            <BigCard title="Humidity" number={humidity} units="%">
                <ProgresBar porcentage={humidity}/>
            </BigCard>
            
            <BigCard title="Visibility" number={visibility} units="miles"/>
            
            <BigCard title="Air Pressure" number={pressure} units="mb"/>
        </div>

    </div>
) 
}

export default Main
