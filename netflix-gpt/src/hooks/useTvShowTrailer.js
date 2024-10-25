import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants'
import { useDispatch } from 'react-redux'
import { addTvShowsTrailerVideo } from '../utilis/tvShowsSlice';

const useTvShowTrailer = (tvShowId) => {

    const dispatch = useDispatch();
 
    const getTvShowsVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/'+tvShowId+'/videos?language=en-US',API_OPTIONS);
        const json = await data.json();

        // console.log("test"+data);

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer =  filterData.length == 0 ? filterData[0] : json.results[0]; // if there is no trailer then take the 1st video
        dispatch(addTvShowsTrailerVideo(trailer));
    }

    useEffect(() => {
        getTvShowsVideos();
    },[]);
}

export default useTvShowTrailer
