import axios from "axios";
import { useEffect, useState } from "react";
import WeatherList from "../components/weather/WeatherList";

function Weather(params) {
  const [city, setCity] = useState({});
  const [listWeather, setListWeather] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Port-au-Prince,ht&units=metric&lang=fr&cnt=30&appid=${process.env.REACT_APP_API_KEY}`
      );
      setCity(response.data.city);
      setListWeather(response.data.list);
      console.log("API CALLED !");
    };
    fetchWeather();
  }, [setCity, setListWeather]);

  return (
    <div>
      <WeatherList city={city} data={listWeather} />
    </div>
  );
}

export default Weather;
