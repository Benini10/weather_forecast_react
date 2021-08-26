import axios from "axios";
import { useEffect, useState } from "react";
import WeatherList from "../components/weather/WeatherList";

function Weather(params) {
  const [city, setCity] = useState({});
  const [listWeather, setListWeather] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast?q=Port-au-Prince,ht&units=metric&lang=fr&cnt=30&appid=de80dc6655fffb93462db4cf5d2f0b70"
      );
      setCity(response.data.city);
      setListWeather(response.data.list);
    };
    fetchWeather();
  }, [setCity, setListWeather]);

  return (
    <div>
      <h3>Weather...</h3>
      <WeatherList data={listWeather} />
    </div>
  );
}

export default Weather;
