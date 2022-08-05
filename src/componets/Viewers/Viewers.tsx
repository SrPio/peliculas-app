import React from 'react'
import styles from "./Viewers.module.css";

function Viewers() {
  return (
    <div className={styles.viewer_container}>
      <div className={styles.option}><img src="/images/viewers-disney.png" alt="" /></div>
        <div className={styles.option}><img src="/images/viewers-pixar.png" alt="" /></div>
        <div className={styles.option}><img src="/images/viewers-marvel.png" alt="" /></div>
        <div className={styles.option}><img src="/images/viewers-starwars.png" alt="" /></div>
        <div className={styles.option}><img src="/images/viewers-national.png" alt="" /></div>
    </div>
  )
}

export default Viewers