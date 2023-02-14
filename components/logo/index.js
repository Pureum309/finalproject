import React from 'react'
import { Router, useRouter } from 'next/router'

import styles from '@/styles/Home.module.css'

export default function Logo({
    onClickMenu,
}) {
    const r = useRouter();

    return (
        <>
        <img 
            className={styles.moodyLogo}
            src = "./placeholder.jpeg" 
            onClick={()=>{r.push("/")}}
        />
        <div className={styles.container } onClick={onClickMenu}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
        </div>
        </>
    )
}