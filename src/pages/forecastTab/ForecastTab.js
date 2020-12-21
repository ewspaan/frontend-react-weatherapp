import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ForecastTab.css';

const apiKey = "6959bb4da6b7873072f25793f953025f";

function ForecastTab({coordinates}) {
    const [forecast,setForcast] = useState(null);

    useEffect( () => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,current,hourly&appid=${apiKey}&lang=nl`)
                setForcast(result.data.daily.slice(1, 6));
            } catch (e) {
                console.error(e);
            }
        }
            if (coordinates) {
                fetchData();
            }

    },[coordinates]);
  return (
      <div className="tab-wrapper">
          {forecast && forecast.map((forecast) => {
          return(
              <article className="forecast-day" key={(forecast.dt)}>
                  <p className="day-description">
                      {forecast.dt}
                  </p>
                  <section className="forecast-weather">
                    <span>
                        {forecast.temp.day}
                    </span>
                    <span className="weather-description">
                        {forecast.weather[0].description}
                    </span>
                  </section>
              </article>
            )
          })}
      </div>
);
};
export default ForecastTab;
