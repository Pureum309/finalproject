import styles from '@/styles/Home.module.css'

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useState } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })


export default function Weather() {
    // const [location, setLocation] = useState('');
    const [temp, setTemp] = useState();
    const [weather, setWeather] = useState();
    
    var apiKey = "8ca7e2dc56cc6762826d7af08501be29";
    var lang = "en";
    var units = "metric";
    var location = "vancouver";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${apiKey}&lang=${lang}`
    console.log(url);

    axios.get(url)
        .then((response) => {
        console.clear();
        console.log(response.data);
        setTemp(response.data.main.temp);
        setWeather(response.data.weather[0].description);
        }).catch(err => {
        console.log(err);
        setTemp();
        setWeather();
        })
        

    return (

        <div className={styles.weathercard}>
            <div className={styles.temp}>
                {temp} °C
            </div>

            <div className={styles.weather}>
                It's {weather} today 
            </div>

            <div className={styles.recommendText}>
                This how we recommend for you today!
            </div>
        </div>
    )
}