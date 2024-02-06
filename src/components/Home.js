import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import VideoBillboard from './VideoBillboard'
import VideoRows from './VideoRows'

const Home = () => {

    useNowPlayingMovies()
  return (
    <div>
        <Header/>
        <VideoBillboard/>
        <VideoRows/>
    </div>
  )
}

export default Home