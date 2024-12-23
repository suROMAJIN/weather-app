/*
//? TODO LIST

1. IMMPLEMENT SEARCH FUNCTIONALITY
2. MODULARIZE THE WEATHER CARD COMPONENT

*/





import React, { useEffect, useState } from "react";
import { openweatherAPI } from "./api/openweatherAPI";
import { FormatTime } from "./utils/FormatTime";

import WeatherCard from "./components/WeatherCard";

const App: React.FC = () => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const [input, setInput] = useState<string>(""); // Input state for search field
  const [city, setCity] = useState<string>("Manila"); // State for storing city name

  useEffect(() => {
    openweatherAPI("Manila")
        .then(data => {
            const formattedData = {
                city: data.name,
                temperature: data.main.temp,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                time: FormatTime(data.dt),
            };
            setWeather(formattedData);
        })
        .catch(err => setError(err.message));
}, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Today's weather report in...</h1>
      {weather ? (
                <WeatherCard
                city={weather.city}
                temperature={weather.temperature}
                description={weather.description}
                icon={weather.icon}
                //! Remove comment below to display time
                time={weather.time}
            />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
