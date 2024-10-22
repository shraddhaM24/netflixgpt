import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { BACKGROUND_URL } from '../utilis/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='GPT absolute -z-10'>
        <img className='w-screen h-screen'
        src={BACKGROUND_URL}
        alt="background-logo"
        />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestion />
    </div>
  )
}

export default GptSearch
