import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import lang from '../utilis/languageConstant';

const TvShowSecondaryConatiner = () => {

    const tvShows = useSelector(store => store.tvshows);
    const lang = useSelector(store => store.config.lang);

  return (
    tvShows.airingToday && (
        <div className='bg-black px-5'>
            <div className=' -mt-[90px] relative z-20'>
                <MovieList title="Airing Today" movies={tvShows.airingToday} />
            </div>
            {/* <MovieList title="Top Rated" movies={tvShows.topRatedTvShows} /> */}
        </div>  
    ))
}

export default TvShowSecondaryConatiner
