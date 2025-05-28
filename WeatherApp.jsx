import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp() {
    const [weatherInfo, setWetherInfo] = useState ({
        city: "Mumbai",
        country: "IN",
        feels_like: 37.67,
        humidity: 62,
        pressure: 1001,
        temp: 31.99,
        temp_max: 31.99,
        temp_min: 31.94,
        weather: "Haze",
    })

    let updateInfo = (newInfo) => {
        setWetherInfo(newInfo);
    }
    return(
        <div style={{textAlign : "center"}}>
            <h2>Weather App by Icon</h2>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}