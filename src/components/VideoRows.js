import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const VideoRows = () => {
    const movies = useSelector(store => store.movies)
  return (
    movies &&
        (
            <div className='bg-black'>
                <div className='-mt-48  relative z-10'>
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
                </div>
                <MovieList title={"Popular"} movies={movies.popularMovies}/>
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
                <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
                <MovieList title={"On Air Series"} movies={movies.onAirTVSeries}/>

            </div>
        )
  )
}

export default VideoRows