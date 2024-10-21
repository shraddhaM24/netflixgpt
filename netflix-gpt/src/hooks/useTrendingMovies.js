import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants'
import { useDispatch } from 'react-redux'
import { addTrendingMovies } from '../utilis/movieSlice';

const useTrendingMovies = () => {

    const dispatch = useDispatch(null);
 
    const getTrendingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",API_OPTIONS);
        const json = await data.json();

        dispatch(addTrendingMovies(json.results));
    }

    useEffect(() => {
        getTrendingMovies();
    },[]);
}

export default useTrendingMovies
