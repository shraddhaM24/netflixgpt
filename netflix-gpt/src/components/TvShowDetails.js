import React from 'react'
import Header from './Header'
import TvShowsBackground from './TvShowsBackground'
import { useParams } from 'react-router-dom'

const TvShowDetails = () => {

    const {id} = useParams();

  return (
    <div>
      <Header />
      <TvShowsBackground tvShowId={id} />
    </div>
  )
}

export default TvShowDetails
