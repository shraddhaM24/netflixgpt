import React from 'react'

const MovieDetailsBackground = ({original_title,overview,release_date}) => {

  return (
    <div className='bg-black'>
      <p className='font-bold text-white text-3xl'>{original_title}</p>
      <p className='text-white text-xl py-2'>{release_date}</p>
      {/* <p>{overview}</p> */}
    </div>
  )
}

export default MovieDetailsBackground
