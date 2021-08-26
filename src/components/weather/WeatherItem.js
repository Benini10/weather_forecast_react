import classes from "./Weather.module.css";

function WeatherItem({ weather }) {
  console.log(weather);

  const date = new Date(weather.dt_txt);

  console.log(date);

  return (
    <div>
      <article className={`${classes.box} ${classes.weather}`}>
        <div className={`${classes.icon} ${classes.bubble}`}>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].main}
            />
          </div>
        </div>
        <h1 className={classes.title}> {}</h1>
        <span className={classes.temp}>
          {weather.main.temp.toFixed(1)}&deg;
        </span>
        <span className={classes.temp}>{weather.name}</span>
        <span className={classes.highLow}>
          {weather.main.temp_min.toFixed(1)}&deg;/{" "}
          {weather.main.temp_max.toFixed(1)}
          &deg;
        </span>
      </article>
    </div>
  );
}

export default WeatherItem;
