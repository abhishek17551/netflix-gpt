import React from 'react'
import { THUMBNAIL } from '../utils/constants'

const MovieCard = ({thumbnail_path}) => {
  return (
    <div className='m-1 w-44 '>
      <img src={THUMBNAIL + thumbnail_path} alt='movie-poster' className='rounded-xl'/>
    </div>
  )
}

export default MovieCard