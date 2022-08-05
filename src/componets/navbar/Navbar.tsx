import React from 'react'
import styles from "./Navbar.module.css";


function Navbar() {
  return (
    <div className={styles.navbar}>
        <img className={styles.logo} src="/images/logo-disney.svg" alt="logo" />
        <div className={styles.options_container}>
            <div className={styles.option}>
                <img className={styles.icon} src="/images/home-icon.svg" alt="" />
                <h1 className={styles.title}>INICIO</h1>
            </div>
            <div className={styles.option}>
                <img className={styles.icon} src="/images/search-icon.svg" alt="" />
                <h1 className={styles.title}>BÚSQUEDA</h1>
            </div>
            <div className={styles.option}>
                <img className={styles.icon} src="/images/watchlist-icon.svg" alt="" />
                <h1 className={styles.title}>MI LISTA</h1>
            </div>
            <div className={styles.option}>
                <img className={styles.icon} src="/images/original-icon.svg" alt="" />
                <h1 className={styles.title}>ORIGINALES</h1>
            </div>
            <div className={styles.option}>
                <img className={styles.icon} src="/images/movie-icon.svg" alt="" />
                <h1 className={styles.title}>PELICULAS</h1>
            </div>
            <div className={styles.option}>
                <img className={styles.icon} src="/images/series-icon.svg" alt="" />
                <h1 className={styles.title}>SERIES</h1>
            </div>
        </div>
        <div className={styles.profile_container}>
            <h1 className={styles.profile_text}>Mi perfil</h1>
            <img src="/images/profile-pic.jpg" alt="profile pic" className={styles.profile_img} />
        </div>
    </div>
  )
}

export default Navbar