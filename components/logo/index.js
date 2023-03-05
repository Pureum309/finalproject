
// import { Router, useRouter } from 'next/router'
// import React, { useState } from 'react';
// import styles from '@/styles/Home.module.css'

// export default function Logo({
   
// }) {
//     const r = useRouter();
//     const [isVisible, setIsVisible] = useState(false);

//     const handleToggle = () => {
//       setIsVisible(!isVisible);
//     }
//     return (
//         <>
   
//      <nav>
//       <div className={styles.navbar}>
//         <div className={styles.navcontainer}>
//             <input className={styles.checkbox} type="checkbox" name="" id="" />
//             <div className={styles.hamburgerlines}>
//               <span className={styles.line1}></span>
//               <span className={styles.line2}></span>
//               <span className={styles.line3}></span>
//             </div>  
//           <div class="logo">
//           <img 
//             className={styles.moodyLogo}
//             src = "./Moody.svg" 
//             onClick={()=>{r.push("/")}}
//         />
//           </div>
//           <div className={styles.menuitems}>
//             <li><a onClick={()=>{r.push("/")}}>Home</a></li>
//             <li><a onClick={()=>{r.push("/products")}}>Product</a></li>
//             <li><a onClick={()=>{r.push("/recommend")}}>Recommend</a></li>
//           </div>
//         </div>
//       </div>
//     </nav>
//         </>
//     )
// }

import { useState } from 'react'

const Logo = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    console.log("Clickkkeddd")
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="super-container">
      <div className="slide-container">
        <div className="stripe toggle-nav js-nav" onClick={toggleMenu}>
          <div className="hamburger-box">
            <span>Menu</span>
            <div className="top"></div>
            <div className="top"></div>
            <div className="top"></div>
          </div>
        </div>
        
       {menuOpen && <div className="nav-wrap">
          <nav className="menu">
            <ul className="ul">
              <li className="li"><a href="#">Option 1</a></li>
              <li className="li"><a href="#">option 2</a></li>
              <li className="li"><a href="#">Option 3</a></li>
              <li className="li"><a href="#">Option 4</a></li>
            </ul>
          </nav>
        </div>}
      </div>
    </div>
  )
}

export default Logo
