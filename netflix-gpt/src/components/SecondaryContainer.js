import React from 'react'
import MovieList from './MovieList';
import {useSelector} from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    movies.nowPlayMovies && (
    <div className='bg-black px-5'>
      <div className=' -mt-[90px] relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayMovies} />
      </div>  
      <MovieList title={"Trending"} movies={movies.trendingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
    </div>
  ))
}

export default SecondaryContainer;
