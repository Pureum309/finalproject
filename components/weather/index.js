import styles from "@/styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Weather() {
    // const [location, setLocation] = useState('');
    // const [temp, setTemp] = useState();
    // const [weather, setWeather] = useState();
    const [weatherData, setWeatherData] = useState(null);
    const [icon, setIcon] = useState("");

    var apiKey = "8ca7e2dc56cc6762826d7af08501be29";
    var lang = "en";
    var units = "metric";
    var location = "vancouver";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${apiKey}&lang=${lang}`;
    // console.log(url);

    useEffect(() => {
        const loadData = async () => {
            await axios
                .get(url)
                .then((response) => {
                    // console.clear();
                    // setTemp(response.data.main.temp);
                    // setWeather(response.data.weather[0].description);
                    console.log(response.data);
                    setWeatherData({
                        temp: response.data.main.temp,
                        weather: response.data.weather[0].description,
                        condition: response.data.weather[0].main,
                    });

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
                    } else if (response.data.weather[0].main == "Thunderstorm") 
                        {setIcon("/icons/thunderstorm.png");
                    } else if (response.data.weather[0].main == "Haze") 
                        {setIcon("/icons/haze.png");
                    } 
                })
                .catch((err) => {
                    console.log(err);
                    // setTemp();
                    // setWeather();
                });
        };

        loadData();
    }, []);

    return (
        <div className={styles.weathercard}>
            <div className={styles.icon}>
                {weatherData && (
                    <Image
                        src={icon}
                        alt="weather icon"
                        width={100}
                        height={100}
                    />
                )}
            </div>

            <div className={styles.temp}>
                {weatherData && weatherData.temp.toFixed(1)} °C
            </div>

            <div className={styles.weather}>
                It's {weatherData && weatherData.weather} today
            </div>

            <div className={styles.recommendText} id="recommendText">
                This how we recommend for you today!
            </div>
        </div>
    );
}
