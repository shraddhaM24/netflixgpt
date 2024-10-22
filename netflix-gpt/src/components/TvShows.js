import React from 'react'
import Header from './Header';
import TvShowMainContainer from './TvShowMainContainer';
import useAiringToday from '../hooks/useAiringToday';

const TvShows = () => {
    useAiringToday();
  return (
    <div>
        <Header />
        <TvShowMainContainer/>
    </div>
  )
}

export default TvShows;
