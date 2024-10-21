import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browser = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useTopRated();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browser
