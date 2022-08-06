import React, { useEffect } from "react";
import { fecthAllMovies } from "../../store/slices/movies/slideMovies";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";


function Movies() {
  const dispatch = useAppDispatch();
  const {list: movies} = useAppSelector(state => state.movies)
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fecthAllMovies());
    console.log(movies);
  }, [dispatch]);

  return (
  <div className="ml-7 mt-6">
    <h1 className="text-lg text-white font-avenir">Peliculas más populares</h1>
    <div className='realtive flex items-center'>
      <div id="slider" className='w-full h-full overflow-x-scroll overflow-y-hidden scroll whitespace-nowrap scroll-smooth scrollbar'>
        {movies.map((movie: any, i: number) => {
          let poster = `http://image.tmdb.org/t/p/original/${movie.poster_path}`
          return <img key={i} onClick={() => navigate(`/movie/${movie.id}`)} src={poster} alt="" className='rounded-xl w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 drop-shadow-2xl' />
        })}
      </div>
    </div>
  </div>
  );
}

export default Movies;
