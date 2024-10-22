import React from 'react'
import MovieList from './MovieList';
import {useSelector} from "react-redux";
import lang from '../utilis/languageConstant';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  const langKey = useSelector(store => store.config.lang);

  return (
    movies.nowPlayMovies && (
    <div className='bg-black px-5'>
      <div className=' -mt-[90px] relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayMovies} />
      </div>  
      <MovieList title={lang[langKey].trending} movies={movies.trendingMovies} />
      <MovieList title={lang[langKey].popular} movies={movies.popularMovies} />
      <MovieList title={lang[langKey].upcoming} movies={movies.upcomingMovies} />
      <MovieList title={lang[langKey].topRated} movies={movies.topRatedMovies} />
    </div>
  ))
}

export default SecondaryContainer;
