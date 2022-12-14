import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Movies/OneMovie.module.css";

export type idParams = {
  id?: string;
};

export type movieInfo = {
  name: string;
  description: string;
  poster: string;
  backdrop: string;
};

function OneSerie() {
  const params = useParams<idParams>();

  const [serieUnit, setSeeriUnit] = useState<movieInfo>();

  useEffect(() => {
    const getSerie = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${params.id}?api_key=a229b5918983bc728da2ec3136264745`
        )
        .then((response) => {
          let posterLink = `http://image.tmdb.org/t/p/original/${response.data.poster_path}`;
          let backdropLink = `http://image.tmdb.org/t/p/original/${response.data.backdrop_path}`;
          setSeeriUnit({
            name: response.data.original_name,
            description: response.data.overview,
            poster: posterLink,
            backdrop: backdropLink,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getSerie();
  }, []);

  return (
    <div>
      <div
        className={styles.backgroud}
        style={{
          backgroundImage: `url("${serieUnit?.backdrop}")`,
        }}
      >
        <div className={styles.filter}>
          <img
            loading="lazy"
            className={styles.backgroud_mobile}
            src={serieUnit?.backdrop}
            alt=""
          />
          <div className={styles.content_container}>
            <h1 className={styles.title}>{serieUnit?.name}</h1>
            <h1 className={styles.description}>{serieUnit?.description}</h1>
            <div className={styles.buttons}>
              <div className={styles.btn_play}>
                <img
                  className={styles.icon_play}
                  src="/images/play-icon-black.png"
                  alt=""
                />
                <h1 className={styles.title_play}>CONTINUAR</h1>
              </div>
              <div className={styles.btns_add_group}>
                <img
                  loading="lazy"
                  className={styles.btn_add}
                  src="/images/watchlist-icon.svg"
                  alt=""
                />
                <img
                  loading="lazy"
                  className={styles.btn_group}
                  src="/images/group-icon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneSerie;
