import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utilis/constants';
import { addTopRatedTvShows } from '../utilis/tvShowsSlice';
import { useEffect } from 'react';

const useTopRatedTvShows = () => {
    
    const dispatch = useDispatch();
    const getTopRated = async () => {
        const data = await fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",API_OPTIONS);
        const json = await data.json();

        dispatch(addTopRatedTvShows(json.results));
    };
    useEffect(() => {
        getTopRated();
    },[]);
}

export default useTopRatedTvShows
