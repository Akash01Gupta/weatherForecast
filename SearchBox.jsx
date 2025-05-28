import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "5d347d6e081dfbcc2df44bc9aba76d42";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            let jsonResponse = await response.json();
            let result = {
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                feels_like: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].main,
                city: jsonResponse.name,
                country: jsonResponse.sys.country
            };
            setError(false);
            return result;
        } catch (err) {
            console.error(err);
            setError(true);
            return null;
        }
    };

    let handlechange = (e) => {
        setCity(e.target.value);
    };

    let handleSubmit = async (e) => {
        e.preventDefault();
     
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={handlechange}
                    required
                />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
            {error && <p style={{ color: "red" }}>No such place exists!</p>}
        </div>
    );
}
