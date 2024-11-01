import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utilis/constants';
import { addCreditsDetails } from '../utilis/movieSlice';

const useCredits = (movieId) => {

    const dispatch = useDispatch();
 
    const getCredits = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/credits",API_OPTIONS);
        const json = await data.json();
        // console.log(json.cast);

        dispatch(addCreditsDetails(json));

    }

    useEffect(() => {
        getCredits();
    },[]);

}

export default useCredits
