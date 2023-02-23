import styles from '@/styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function WeatherLocation() {
  const [location, setLocation] = useState('');
  const [data, setData] = useState({});
  // const [weather, setWeather] = useState();
  const [weatherData, setWeatherData] = useState(null);
  const [icon, setIcon] = useState("");
  const [ErrorMessange, setErrorMessange] = useState('');
  // const [temp, setTemp] = useState();
  const [display, setDisplay] = useState(false);
  // const [image, setImage] = useState("");

  var apiKey = "8ca7e2dc56cc6762826d7af08501be29";
  var lang = "en";
  var units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${apiKey}&lang=${lang}`
  console.log(url);

  const searchLocation = (event) => {
    if(event.key === "Enter"){
      axios.get(url)
      .then((response) => {
        console.clear();
        setData(response.data)
        console.log(response.data);
        // setWeather(response.data.weather[0].description);
        // setTemp(response.data.main.temp);
        setWeatherData({
          temp: response.data.main.temp, 
          weather: response.data.weather[0].description, 
          condition: response.data.weather[0].main
      });
        setDisplay(true);
        setErrorMessange("")

      if (response.data.weather[0].main == "Clouds") {
          setIcon("/icons/broken-clouds.png");
      } else if (response.data.weather[0].main == "Clear") {
          setIcon("/icons/clear-sky.png");
      } else if (response.data.weather[0].main == "Atmosphere") {
          setIcon("/icons/mist.png");
      } else if (response.data.weather[0].main == "Rain") {
          setIcon("/icons/rain.png");
      } else if (response.data.weather[0].main == "Drizzle") {
          setIcon("/icons/shower-rain.png");
      } else if (response.data.weather[0].main == "Snow") {
          setIcon("/icons/snow.png");
      } else if (response.data.weather[0].main == "Thunderstorm") {
          setIcon("/icons/thunderstorm.png");
      }
        
      }).catch(err => {
        console.log(err);
        setErrorMessange("Please enter another location");
        setData({});
        // setWeather();
        // setTemp();
      })
      setLocation('')
    }
  }
  return (
    <>
    
        <div className={styles.input}>
          <div className={styles.errormessage}>
            {ErrorMessange}
          </div>
          <input 
            value={location}
            onChange={event => setLocation(event.target.value)}
            placeholder="Check Your Weather"
            onKeyDown={searchLocation}
            type="text"
            img src="./search.svg"
          />
        </div>

    {display ? 
           <>

      <div className={styles.locationcont}>
          
          <div className={styles.location}>
            {data.name}
          </div>
          
          <div className={styles.locationicon}>
            {weatherData && <Image src={icon} alt="weather icon" width={100} height={100} />}
          </div>

          <div className={styles.locationtemp}>
            {weatherData && weatherData.temp} °C
          </div>

            <div className={styles.locationweather}>
              {weatherData && weatherData.weather.toUpperCase()}
            </div>
        </div>

        </> : null
    }

    </>
  )
}
