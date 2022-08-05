import React, { useEffect } from "react";
import { fecthAllMovies } from "../../store/slices/movies/slideMovies";
import { useAppDispatch, useAppSelector } from "../../store/hooks";


function Movies() {
  const dispatch = useAppDispatch();
  const {list: movies} = useAppSelector(state => state.movies)

  useEffect(() => {
    dispatch(fecthAllMovies());
  }, [dispatch]);

  return (
  <div className="ml-7 mt-6">
    <h1 className="text-lg text-white font-avenir">Peliculas más populares</h1>
    <div className='realtive flex items-center'>
      <div id="slider" className='w-full h-full overflow-x-scroll overflow-y-hidden scroll whitespace-nowrap scroll-smooth scrollbar'>
        {movies.map((movie: any) =>{
          let poster = `http://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`
          return <img src={poster} alt="" className='rounded-xl w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 drop-shadow-2xl' />
        })}
      </div>
    </div>
  </div>
  );
}

export default Movies;
