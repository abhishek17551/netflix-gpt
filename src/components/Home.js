import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Home = () => {

    useNowPlayingMovies()
  return (
    <div>
        <Header/>
    </div>
  )
}

export default Home