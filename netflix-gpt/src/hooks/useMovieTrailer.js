import  { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideos } from '../utilis/movieSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // fetch trailer video & updating the store with trailer video data
    const getṂoviesVideos = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
      const json = await data.json();

      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer =  filterData.length == 0 ? filterData[0] : json.results[0]; // if there is no trailer then take the 1st video
      // setTrailerId(trailer.key);
      dispatch(addTrailerVideos(trailer));
    }
  
    useEffect(() => {
      getṂoviesVideos();
    },[]);
}

export default useMovieTrailer
