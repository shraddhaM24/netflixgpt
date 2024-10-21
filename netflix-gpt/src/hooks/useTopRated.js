import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utilis/movieSlice';

const useTopRated = () => {

    const dispatch = useDispatch(null);
 
    const getTopRated = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTIONS);
        const json = await data.json();

        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        getTopRated();
    },[]);
}

export default useTopRated
