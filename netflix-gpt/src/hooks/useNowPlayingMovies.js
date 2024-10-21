import { API_OPTIONS } from '../utilis/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utilis/movieSlice';
import { useEffect } from 'react'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovie = async () => {
      // const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
    //   console.log(json);
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      getNowPlayingMovie();
    },[]);
};

export default useNowPlayingMovies;