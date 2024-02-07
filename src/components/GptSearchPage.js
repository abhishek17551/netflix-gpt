import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { LANDING_PAGE_BG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className=''>
        <div className='absolute -z-10'>
          <img 
            src={LANDING_PAGE_BG}
            alt='landing-page-background'
            className='h-full '    
          />
        </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch