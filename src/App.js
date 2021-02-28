import axios from 'axios';
import './App.scss';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import {useEffect,useState} from "react";


function App() {
  const [current, setCurrent] = useState({icon:"10d"});
  const [daily, setDaily] = useState([]);
  const [hightlights, setHightlights] = useState({wind:{}})
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("London");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}city?city=${city}&units=${units}`)
    .then((result) => {
      setCurrent(result.data.current);
      setDaily(result.data.daily);
      setHightlights(result.data.Hightlights);
    }).catch((error) => {
      alert("City not found")
      setCity("London")
    });
  }, [units,city])
  

 const requestWeatherByCoords = () => {
    let lat;
    let lon;
    navigator.geolocation.getCurrentPosition(function(position) {
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      axios.get(`${process.env.REACT_APP_API_URL}coords?lat=${lat}&lon=${lon}&units=${units}`)
      .then((result) => {
        setCurrent(result.data.current);
        setDaily(result.data.daily);
        setHightlights(result.data.Hightlights);
      }).catch((error) => {
        console.log("error: ",error.message);
      });
    });
 }
 
  const resiveCityFromAside = (e) => {
    setCity(e)
  }

  return (
    <div className="App">
      <Sidebar click={requestWeatherByCoords} currentWeather={current} units={units} resiveCity={resiveCityFromAside}/>
      <Main 
        daily={daily} 
        wind={hightlights.wind} 
        humidity={hightlights.humidity} 
        visibility={hightlights.visibility} 
        pressure={hightlights.pressure} 
        click={(units) => {setUnits(units);}}
      />
    </div>
  );
}

export default App;
