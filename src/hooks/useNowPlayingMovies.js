import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, NOW_PLAYING_API } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/slices/moviesSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_API,API_OPTIONS)
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
       !nowPlayingMovies && getNowPlayingMovies();
    },[])
}

export default useNowPlayingMovies