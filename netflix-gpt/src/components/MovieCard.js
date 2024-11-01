import React from 'react'
import { IMG_CDN_URL } from '../utilis/constants'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({posterPath,id}) => {

  const navigate = useNavigate()

  const handleMovieClick = () =>{
    navigate(`/movie/${id}`);
  }

  return (
    <div className='w-40 pr-5' onClick={handleMovieClick}>
      <img alt="Movie Card" 
        src={IMG_CDN_URL+posterPath}
      />
    </div>
  )
}

export default MovieCard
