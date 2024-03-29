import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  //console.log(movies)
  return (
    <div className='ml-3 bg-transparent mt-3'>
      <h1 className='text-3xl italic ml-3 p-2 text-white font-mono'>{title}</h1>
      <div className='flex  overflow-x-scroll scroll-smooth '>
        <div className='flex m-1'>
            {
              movies?.map(({id,poster_path}) => (
                <MovieCard key={id} thumbnail_path={poster_path}/>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default MovieList