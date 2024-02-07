import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useOnAirTVSeries from '../hooks/useOnAirTVSeries'
import VideoBillboard from './VideoBillboard'
import VideoRows from './VideoRows'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearchPage'

const Home = () => {

    const showGptSearch = useSelector(store => store.gpt.showGptSearch)


    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useOnAirTVSeries();
  return (
    <div>
        <Header/>
        {
          showGptSearch ? (
          <GptSearch/>
          ) : (
          <>
            <VideoBillboard/>
            <VideoRows/>
          </>
          )
        }

    </div>
  )
}

export default Home