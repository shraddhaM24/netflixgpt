import React from 'react'

const MovieDetailsBackground = ({original_title,overview,release_date}) => {

  return (
    <div>
      <p>{original_title}</p>
      <p>{release_date}</p>
      <p>{overview}</p>
    </div>
  )
}

export default MovieDetailsBackground
