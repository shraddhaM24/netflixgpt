import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import TvShowsBackground from './TvShowsBackground';

const TvShowMainContainer = () => {
    
    const tvshows = useSelector(store => store.tvshows?.airingToday);
    if(!tvshows) return;

    const tvshowsList = tvshows[0];
    // console.log(tvshows);
    const {original_name,overview,id} = tvshowsList;

  return (
    <div>
        <VideoTitle title={original_name} overview={overview} />
        <TvShowsBackground tvShowId={id} />
    </div>
  )
}

export default TvShowMainContainer
