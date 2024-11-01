import React,{useEffect} from 'react';
import VideoBackground from './VideoBackground';
import MovieDetailsBackground from './MovieDetailsBackground';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utilis/constants';
import { addMovieDetails } from '../utilis/movieSlice';
import CreditsDetails from './CreditsDetails';

const MovieDetailsMainContainer = () => {
  const {id} = useParams();
  const movies = useSelector(store => store.movies?.movieDetails);
  const dispatch = useDispatch();
  
  const{ original_title, overview,release_date} = movies;
    
  const getMovieDetails =  async() => {
      const data = await fetch("https://api.themoviedb.org/3/movie/"+id+"?language=en-US",API_OPTIONS);
      const json = await data.json();
      dispatch(addMovieDetails(json));
  }

  useEffect(() => {
      getMovieDetails();
  },[]);

  return (
    <div className='watch-movie'>
      <div>
        <VideoBackground movieId={id} />
        <MovieDetailsBackground original_title={original_title} release_date={release_date} overview={overview} />
      </div>
      <CreditsDetails movieId={id} />
    </div>
  );
};

export default MovieDetailsMainContainer;
