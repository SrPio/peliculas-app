import React, { useEffect } from "react";
import { fecthAllSeries } from "../../store/slices/series/slideSeries";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";

function Series() {
    const dispatch = useAppDispatch();
  const {list: series} = useAppSelector(state => state.series)
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fecthAllSeries());
  }, [dispatch]);
  return (
    <div className="ml-7 mt-6">
      <h1 className="text-lg text-white font-avenir">Series más populares</h1>
      <div className='realtive flex items-center'>
        <div id="slider" className='w-full h-full overflow-x-scroll overflow-y-hidden scroll whitespace-nowrap scroll-smooth scrollbar'>
          {series.map((serie: any,i: number) =>{
            let poster = `http://image.tmdb.org/t/p/original/${serie.poster_path}`
            return <img key={i} onClick={() => navigate(`/serie/${serie.id}`)} src={poster} alt="" className='rounded-xl w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 drop-shadow-2xl' />
          })}
        </div>
      </div>
    </div>
    );
}

export default Series