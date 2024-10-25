import { API_OPTIONS } from '../utilis/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { airingTodayShows } from '../utilis/tvShowsSlice';

const useAiringToday = () => {
    const dispatch = useDispatch();

    const getAiringToday = async () => {
      // const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
      const data = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', API_OPTIONS);
      const json = await data.json();
      dispatch(airingTodayShows(json.results));
    };
  
    useEffect(() => {
      getAiringToday();
    },[]);
};

export default useAiringToday;