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
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/moodyicon.svg" />
        </Head>
        <main className={styles.main}>
          <div>
            <Logo 
                onClickMenu={()=>{console.log("menuClickedddd")}}
              /> 
          </div>

          <div className={styles.weathercard_square}>
            <WeatherLocation />
          </div>
        </main>
      </>
    )
  }
  