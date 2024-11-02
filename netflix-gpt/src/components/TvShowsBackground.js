import React, { useEffect } from 'react'
import { addTvShowsTrailerVideo } from '../utilis/tvShowsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utilis/constants';

const TvShowsBackground = ({tvShowId}) => {

    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.tvshows?.tvShowsTrailerVideo);

    const getTvShowsVideos = async () => {
      try {
          const response = await fetch(
            'https://api.themoviedb.org/3/tv/' + tvShowId + '/videos?language=en-US',
            API_OPTIONS
          );
          const json = await response.json();
  
          // Ensure json.results exists and is an array
          const filterData = json.results?.filter(
            (video) => video.type === 'Trailer' && video.site === 'YouTube'
          ) || [];
  
          // If there's a valid trailer, select the first one, or fallback to null
          const trailer = filterData.length > 0 ? filterData[0] : null;
  
          if (trailer) {
            dispatch(addTvShowsTrailerVideo(trailer));
          } else {
            console.log('No embeddable trailers found.');
            dispatch(addTvShowsTrailerVideo(null)); // Set to null if no valid trailer
          }
      } catch (error) {
          console.error('Failed to fetch TV show videos:', error);
          dispatch(addTvShowsTrailerVideo(null)); // Handle error by setting to null
      }
  };
  
      useEffect(() => {
        getTvShowsVideos();
      }, []);

      return (
        <div>
          {trailerVideo ? (
            <div className='w-screen'>
              <iframe className='w-screen aspect-video h-screen'
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p>No trailer available for this movie.</p>
          )}
        </div>
      );
}

export default TvShowsBackground
