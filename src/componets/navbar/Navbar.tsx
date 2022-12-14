import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img
        loading="lazy"
        className={styles.logo}
        src="/images/logo-disney.svg"
        alt="logo"
      />
      <div className={styles.options_container}>
        <div className={styles.option}>
          <img
            loading="lazy"
            className={styles.icon}
            src="/images/home-icon.svg"
            alt=""
          />
          <Link className={styles.title} to="/">
            INICIO
          </Link>
        </div>
        <div className={styles.option}>
          <img
            loading="lazy"
            className={styles.icon}
            src="/images/search-icon.svg"
            alt=""
          />
          <h1 className={styles.title}>BÚSQUEDA</h1>
        </div>
        <div className={styles.option}>
          <img
            loading="lazy"
            className={styles.icon}
            src="/images/watchlist-icon.svg"
            alt=""
          />
          <h1 className={styles.title}>MI LISTA</h1>
        </div>
        <div className={styles.option}>
          <img
            loading="lazy"
            className={styles.icon}
            src="/images/original-icon.svg"
            alt=""
          />
          <h1 className={styles.title}>ORIGINALES</h1>
        </div>
        <div className={styles.option}>
          <img
            loading="lazy"
            className={styles.icon}
            src="/images/movie-icon.svg"
            alt=""
          />
          <h1 className={styles.title}>PELICULAS</h1>
        </div>
        <div className={styles.option}>
          <img
            loading="lazy"
            className={styles.icon}
            src="/images/series-icon.svg"
            alt=""
          />
          <h1 className={styles.title}>SERIES</h1>
        </div>
      </div>
      <div className={styles.profile_container}>
        <h1 className={styles.profile_text}>Mi perfil</h1>
        <img
          loading="lazy"
          src="/images/profile-pic.jpg"
          alt="profile pic"
          className={styles.profile_img}
        />
      </div>
      <div className={styles.navbar_mobile}>
        <div className={styles.navbar_mobile_container}>
          <Link to="/">
            <img
              loading="lazy"
              className={styles.icon}
              src="/images/home-icon.svg"
              alt="logo"
            />
          </Link>
          <img
            loading="lazy"
            className={styles.icon}
            src="/images/search-icon.svg"
            alt="logo"
          />
          <img
            loading="lazy"
            className={styles.icon}
            src="/images/download-icon.svg"
            alt="logo"
          />
          <img
            loading="lazy"
            className={styles.profile_img}
            src="/images/profile-pic.jpg"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
