import React from 'react'
import BigCard from '../Cards/Small/BigCard/BigCard'
import CardSmall from '../Cards/Small/CardSmall'
import ProgresBar from '../UI/Bar/ProgresBar'
import Button from '../UI/Buttons/ButtonRec/Button'
import classes from "./Main.module.scss"

const Main = ()=>{
    
    const windDegrees = -45;
 
return (
    <div className={classes.Main}>
        <div className={classes.Control}>
            <Button round>°F</Button>
            <Button round>°C</Button>
        </div>
        <div className={classes.List}>
            <CardSmall/>
            <CardSmall/>
            <CardSmall/>
            <CardSmall/>
            <CardSmall/>
        </div>
        <h1>Today's Hightlights</h1>
        <div className={classes.ListHightlights}>
            <BigCard>
                <ProgresBar/>
            </BigCard>
            <BigCard><Button round><i style={{transform: `rotate(${windDegrees}deg)`}} className="fas fa-location-arrow"></i></Button></BigCard>
            <BigCard/>
            <BigCard/>
        </div>

    </div>
) 
}

export default Main
