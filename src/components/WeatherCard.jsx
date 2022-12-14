import React, { useState } from "react";


  const WeatherCard = ({weather,temp}) => {

  const [isCelsius, setIsCelsius] = useState(true)
  const handleClick = () => setIsCelsius(!isCelsius)


  return (
    <article className="card">
      <header className="card__header">
        <h1 className="card__title">Weather App</h1>
        <h2 className="card__subtitle">
            {weather?.name},{weather?.sys.country}
        </h2>
      </header>
      <section className="card__icon-container">
        <img className="card__icon"
          src={
            weather &&
            `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`
          }
          alt=""
        />
      </section>
      <section className="card__info">
        <h3 className="card__description">
          "{weather?.weather[0].description}"</h3>
        <ul className="card__list">
          <li className="card__item">
            <i className="icon fa-solid fa-wind"></i>
            <span className="card__span">Wind Speed: </span>
            {weather?.wind.speed} m/s
          </li>
          <li className="card__item">
            <i className="icon fa-solid fa-cloud"></i>
            <span className="card__span">Clouds: </span>
            {weather?.clouds.all} %
          </li>
          <li className="card__item">
            <div className="box__icon">
                <i className="icon fa-solid fa-temperature-half"></i>
            </div>
            <span className="card__span">Pressure: </span>
            {weather?.main.pressure} hPa
          </li>
        </ul>
      </section>
      <footer className="card__footer">  
      <h3 className="card__temp">
          {
          isCelsius ? 
          `${temp?.celsius} ºC`
          : 
          `${temp?.farenheit} ºF`
        } 
      </h3>
        <button className="card__btn" onClick={handleClick}>Change to {isCelsius?'°F':'°C'}</button>
      </footer>
    </article>
  );
};

export default WeatherCard;
