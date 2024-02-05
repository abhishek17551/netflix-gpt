import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import VideoBillboard from './VideoBillboard'

const Home = () => {

    useNowPlayingMovies()
  return (
    <div>
        <Header/>
        <VideoBillboard/>
    </div>
  )
}

export default Home