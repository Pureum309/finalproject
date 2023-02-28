
import { Router, useRouter } from 'next/router'
import React, { useState } from 'react';
import styles from '@/styles/Home.module.css'

export default function Logo({
   
}) {
    const r = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
      setIsVisible(!isVisible);
    }
    return (
        <>
   
     <nav>
      <div className={styles.navbar}>
        <div className={styles.navcontainer}>
            <input className={styles.checkbox} type="checkbox" name="" id="" />
            <div className={styles.hamburgerlines}>
              <span className={styles.line1}></span>
              <span className={styles.line2}></span>
              <span className={styles.line3}></span>
            </div>  
          <div class="logo">
          <img 
            className={styles.moodyLogo}
            src = "./Moody.svg" 
            onClick={()=>{r.push("/")}}
        />
          </div>
          <div className={styles.menuitems}>
            <li><a onClick={()=>{r.push("/")}}>Home</a></li>
            <li><a onClick={()=>{r.push("/products")}}>Product</a></li>
            <li><a onClick={()=>{r.push("/recommend")}}>Recommend</a></li>
          </div>
        </div>
      </div>
    </nav>
        </>
    )
}