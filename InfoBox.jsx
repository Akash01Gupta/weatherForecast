import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import './InfoBox.css';

export default function InfoBox({ Info }) {
    const INIT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyn-kaeOSRpCTZWuXwVSSm6sWN5fBbnJelQ&s"
    const HOT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROID3lOn1dGUsVi1-w5jJL8e6vrf-P2trzIA&s";
    const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0R-30mYvruiwuqb35ea3PDL61ul65qPWoKA&s";
    const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC1JJlSNmnJzsx3JUL9a6TXVYItwawhs66zg&s";

    return (
        <div className="InfoBox">
            <div className='card-container'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            Info.humidity > 80 
                            ?RAIN_URL 
                            :Info.temp 
                            >15 
                            ?HOT_URL 
                            :COLD_URL
                            }
                            title="green iguana"
                    />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {Info.city} {
                            Info.humidity > 80 
                            ? <ThunderstormIcon />
                            :Info.temp 
                            >15 
                            ? <WbSunnyIcon />
                            : <AcUnitIcon />
                            }, {Info.country}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {Info.temp}&deg;C </p>
                            <p>Humidity = {Info.humidity}</p>
                            <p>Min Temp = {Info.temp_min}&deg;C</p>
                            <p>Max Temp = {Info.temp_max}&deg;C</p>
                            <p>The weather can be describe as ${Info.weather} and Feels Like = {Info.feels_like}&deg;C</p>


                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}