import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, ON_AIR_TV_SERIES_API } from "../utils/constants";
import { addOnAirTVSeries } from "../utils/slices/moviesSlice";
import { useEffect } from "react";

const useOnAirTVSeries = () => {
    const dispatch = useDispatch();

    const onAirTVSeries = useSelector((store) => store.movies.onAirTVSeries)

    const getOnAirTVSeries = async () => {
        const data = await fetch(ON_AIR_TV_SERIES_API,API_OPTIONS)
        const json = await data.json();
        dispatch(addOnAirTVSeries(json.results))
    }

    useEffect(() => {
       !onAirTVSeries && getOnAirTVSeries();
    },[])
}

export default useOnAirTVSeries;