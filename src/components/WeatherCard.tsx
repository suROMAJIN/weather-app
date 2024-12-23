import React from "react";
import "../styles/WeatherCard.css";

interface WeatherCardProps {
    city: string;
    temperature: number;
    description: string;
    icon: string;
    // ! optional at the moment, feature to display city time not required
    time?: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temperature, description, icon, time }) => {
    return (
        <div className="weather-card">
            <h2>{city}</h2>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" />
            <p>{description}</p>
            <p>{temperature} °C</p>
             
             {/* Conditionally render time */}
             {time && <p>Time: {time}</p>}
             
        </div>
    );
};

export default WeatherCard;
