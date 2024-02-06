import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useOnAirTVSeries from '../hooks/useOnAirTVSeries'
import VideoBillboard from './VideoBillboard'
import VideoRows from './VideoRows'

const Home = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useOnAirTVSeries();
  return (
    <div>
        <Header/>
        <VideoBillboard/>
        <VideoRows/>
    </div>
  )
}

export default Home