import { format } from "date-fns";
import classes from "./Weather.module.css";

function WeatherItem({ weather }) {
  return (
    <article className={`${classes.box} ${classes.weather}`}>
      <div className={`${classes.icon} ${classes.bubble}`}>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].main}
          />
        </div>
      </div>
      <span className={classes.highLow}>{weather.weather[0].main}</span>
      <h1 className={classes.title}>
        <p>{format(new Date(weather.dt_txt), "EEEE dd")}</p>
        <p>{format(new Date(weather.dt_txt), "HH:mm")}</p>
      </h1>
      <span className={classes.temp}>{weather.main.temp.toFixed(1)}&deg;</span>
      <span className={classes.temp}>{weather.name}</span>
      <span className={classes.highLow}>
        {weather.main.temp_min.toFixed(1)}&deg;/{" "}
        {weather.main.temp_max.toFixed(1)}
        &deg;
      </span>
    </article>
  );
}

export default WeatherItem;
