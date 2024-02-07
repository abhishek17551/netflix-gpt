import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/slices/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies.trailerVideo)

    const getVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos',API_OPTIONS)
        const json = await data.json()
        const trailer = json.results.find((video) => video.type === "Trailer")
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
       !trailerVideo && getVideo()
    },[])
}

export default useMovieTrailer