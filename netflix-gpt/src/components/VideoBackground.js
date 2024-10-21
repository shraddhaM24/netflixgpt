import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideos } from '../utilis/movieSlice';
import { API_OPTIONS } from '../utilis/constants';

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const getMoviesVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await response.json();

    // Filter for YouTube videos of type 'Trailer'
    const filterData = json.results.filter(
      (video) => video.type === 'Trailer' && video.site === 'YouTube'
    );

    // If there's a valid trailer, select the first one, or fallback to the first video
    const trailer = filterData.length > 0 ? filterData[0] : null;

    if (trailer) {
      dispatch(addTrailerVideos(trailer));
    } else {
      console.log('No embeddable trailers found.');
      dispatch(addTrailerVideos(null)); // Set to null if no valid trailer
    }
  };

  useEffect(() => {
    getMoviesVideos();
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
};

export default VideoBackground;
