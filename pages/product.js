import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import ProductCard from '@/components/productCard'
import Button from '@/components/button'

import Logo from '@/components/logo'

const inter = Inter({ subsets: ['latin'] })

export default function Product ({

}) { 
    return (
      <>
        <Head>
          <title>Moody</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/moodyicon.svg" />
        </Head>
        <main className={styles.productmain}>

            <div className={styles.productCard}>
                <ProductCard />
        
                <div className={styles.submitButton}>
                    <Button 
                        text="Add to Cart" >
                    </Button>
                </div>

            </div>
            
        </main>
      </>
    )
  }
  