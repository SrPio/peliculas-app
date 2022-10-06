import React from "react";
import styles from "./Viewers.module.css";

function Viewers() {
  return (
    <div className={styles.viewer_container}>
      <div
        className={`${styles.option} hover:scale-105 hover:border-white ease-in-out duration-300 drop-shadow-2xl`}
      >
        <video className={styles.videoTag} autoPlay loop muted>
          <source src={"/images/DisneyVideo.mp4"} type="video/mp4" />
        </video>
        <img loading="lazy" src="/images/viewers-disney.png" alt="" />
      </div>
      <div
        className={`${styles.option} hover:scale-105 hover:border-white ease-in-out duration-300 drop-shadow-2xl`}
      >
        <video className={styles.videoTag} autoPlay loop muted>
          <source src={"/images/DisneyPixarVideo.mp4"} type="video/mp4" />
        </video>
        <img loading="lazy" src="/images/viewers-pixar.png" alt="" />
      </div>
      <div
        className={`${styles.option} hover:scale-105 hover:border-white ease-in-out duration-300 drop-shadow-2xl`}
      >
        <video className={styles.videoTag} autoPlay loop muted>
          <source src={"/images/DisneyMarvelVideo2.mp4"} type="video/mp4" />
        </video>
        <img loading="lazy" src="/images/viewers-marvel.png" alt="" />
      </div>
      <div
        className={`${styles.option} hover:scale-105 hover:border-white ease-in-out duration-300 drop-shadow-2xl`}
      >
        <video className={styles.videoTag} autoPlay loop muted>
          <source src={"/images/DisneyStarWarsVideo.mp4"} type="video/mp4" />
        </video>
        <img loading="lazy" src="/images/viewers-starwars.png" alt="" />
      </div>
      <div
        className={`${styles.option} hover:scale-105 hover:border-white ease-in-out duration-300 drop-shadow-2xl`}
      >
        <video className={styles.videoTag} autoPlay loop muted>
          <source src={"/images/DisneyNatgVideo.mp4"} type="video/mp4" />
        </video>
        <img loading="lazy" src="/images/viewers-national.png" alt="" />
      </div>
    </div>
  );
}

export default Viewers;
