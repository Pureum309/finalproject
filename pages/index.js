import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Logo from '@/components/logo'
import Weather from '@/components/weather'
import CategoryCard from '@/components/categoryCard'
import BottomCard from '@/components/postCard'
import ListItem from '@/components/listItem'

export default function Home({
  cat1="Top",
  cat2="Bottom",
  cat3="Dress",
  cat4="Bag",
  cat5="Shoes",
  catimg1="./tops_placeholder.png",
  catimg2="./bottom_placeholder.png",
  catimg3="./dress_placeholder.png",
  catimg4="./bag_placeholder.png",
  catimg5="./shoes_placeholder.png",
  
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


          <Weather />

          <div className={styles.categorycard}>
            <CategoryCard txt={cat1} img={catimg1} />
            <CategoryCard txt={cat2} img={catimg2}/>
            <CategoryCard txt={cat3} img={catimg3}/>
            <CategoryCard txt={cat4} img={catimg4}/>
            <CategoryCard txt={cat5} img={catimg5}/>
          </div>

        <div className={styles.des}>
          Check out what we recommend for you based on your current location's weather!
        </div>
          

        <div className={styles.btn}>
          <a className={styles.recommend} href="/recommend" >Recommend Page</a>
        </div>


          <div className={styles.heading}>
            <a className={styles.mostPopular}>Most Popular</a>
            <a className={styles.seeAll} href="/products" >See All</a>
          </div>
          <ListItem 
            limit={15}
            mainitem={styles.mainitem }
            items={styles.items}
            item1={styles.item1}
            itemImage={styles.itemImage}
            itemText={styles.itemText}
            keyword="Women Top and Bottom"
          />

          <BottomCard 
            txtHeading = "Shopping made seamless"
            txt="Free shipping, Free returns"
          />
      </main>
    </>
  )
}
