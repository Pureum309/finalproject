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
  const [weather, setWeather] = useState();
  const [ErrorMessange, setErrorMessange] = useState('');
  const [temp, setTemp] = useState();
  const [display, setDisplay] = useState(false);
  const [image, setImage] = useState("");

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
        setWeather(response.data.weather[0].description);
        setTemp(response.data.main.temp);
        setDisplay(true);
        setImage(response.data.weather[0].icon);
        setErrorMessange("")
      }).catch(err => {
        console.log(err);
        setErrorMessange("Please enter another location");
        setData({});
        setWeather();
        setTemp();
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
          
          <img className={styles.locationicon} src={`icons/${data.weather[0].icon}.png`}/>

          <div className={styles.locationtemp}>
              {temp} °C
          </div>

            <div className={styles.locationweather}>
              {weather && weather.toUpperCase()}
            </div>
        </div>

        </> : null
    }

    </>
  )
}