import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Logo from '@/components/logo'

import WeatherLocation from '@/components/weatherlocation' 

const inter = Inter({ subsets: ['latin'] })

export default function Recommend({

}) { 
    return (
      <>
        <Head>
          <title>Moody</title>
          <meta name="description" content="Moody is an app recommending the perfect outfit for any weather at your location." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/moodyicon.svg" />
        </Head>
        <main className={styles.main}>
          <div className={styles.logoMain}>
            <Logo /> 
          </div>
          <h2 className={styles.recText}>Search Location, We'll find your match!</h2>
          <div className={styles.weathercard_square}>
            <WeatherLocation />
          </div>
        </main>
      </>
    )
  }
  