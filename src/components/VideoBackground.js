import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/slices/moviesSlice'

const VideoBackground = ({movieId}) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo)

    const getVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS)
        const json = await data.json()
        const trailer = json.results.find((video) => video.type === "Trailer")
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        getVideo()
    },[])
  return (
    <div>
        <iframe className='w-full h-[35rem] absolute' src={"https://www.youtube.com/embed/" + trailerVideo?.key} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground