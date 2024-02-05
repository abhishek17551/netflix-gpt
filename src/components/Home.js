import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS, NOW_PLAYING_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/slices/moviesSlice'

const Home = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_API,API_OPTIONS)
        const json = await data.json();
        //console.log(json.results)
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        getNowPlayingMovies();
    },[])

  return (
    <div>
        <Header/>
    </div>
  )
}

export default Home