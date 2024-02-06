import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS, NOW_PLAYING_API } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/slices/moviesSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_API,API_OPTIONS)
        const json = await data.json();
        //console.log(json.results.length)
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies