import React, { useState,useEffect } from 'react'

const WeatherCard = ({ temp, humidity,pressure,weatherkamood,name,speed,country,sunset,}) => {
  
    const [weatherState, setWeatheState] = useState("Lucknow");

    useEffect(() => {
        if (weatherkamood) {
          switch (weatherkamood) {
            case "Clouds":
              setWeatheState("wi-day-cloudy");
              break;
            case "Haze":
              setWeatheState("wi-day-haze");
              break;
            case "Clear":
              setWeatheState("wi-day-sunny");
              break;
            case "Mist":
              setWeatheState("wi-dust");
              break;
              case "Smoke":
                  setWeatheState("wi-smoket")
                  break;
                  case "Rain":
                      setWeatheState("wi-rain")
                      break;
    
            default:
              setWeatheState("wi-day-sunny");
              break;
          }
        }
      }, [weatherkamood]);


  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weatherkamood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>
   
   

   <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr}  <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard