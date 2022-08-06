import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fecthOneMovie } from "../../store/slices/movies/slideOneMovie";
import styles from "./OneMovie.module.css";

export type idParams = {
  id?: string;
};

export type movieInfo = {
  name: string;
  description: string;
  poster: string;
  backdrop: string;
};

function OneMovie() {
  const params = useParams<idParams>();

  const [movieUnit, setmovieUnit] = useState<movieInfo>();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=a229b5918983bc728da2ec3136264745`
      )
      .then((response) => {
        let posterLink = `http://image.tmdb.org/t/p/original/${response.data.poster_path}`;
        let backdropLink = `http://image.tmdb.org/t/p/original/${response.data.backdrop_path}`;
        setmovieUnit({
          name: response.data.title,
          description: response.data.overview,
          poster: posterLink,
          backdrop: backdropLink,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div
        className={styles.backgroud}
        style={{
          backgroundImage: `url("${movieUnit?.backdrop}")`,
        }}
      >
        <div className={styles.filter}>
          <img
            className={styles.backgroud_mobile}
            src={movieUnit?.backdrop}
            alt=""
          />
          <div className={styles.content_container}>
            <h1 className={styles.title}>{movieUnit?.name}</h1>
            <h1 className={styles.description}>{movieUnit?.description}</h1>
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
                  className={styles.btn_add}
                  src="/images/watchlist-icon.svg"
                  alt=""
                />
                <img
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

export default OneMovie;
