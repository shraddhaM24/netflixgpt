import React from 'react'
import Header from './Header';
import TvShowMainContainer from './TvShowMainContainer';
import useAiringToday from '../hooks/useAiringToday';
import TvShowSecondaryConatiner from './TvShowSecondaryConatiner';

const TvShows = () => {
    useAiringToday();
  return (
    <div>
        <Header />
        <TvShowMainContainer/>
        <TvShowSecondaryConatiner/>
    </div>
  )
}

export default TvShows;
