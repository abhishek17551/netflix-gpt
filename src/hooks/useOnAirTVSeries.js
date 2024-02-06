import { useDispatch } from "react-redux";
import { API_OPTIONS, ON_AIR_TV_SERIES_API } from "../utils/constants";
import { addOnAirTVSeries } from "../utils/slices/moviesSlice";
import { useEffect } from "react";

const useOnAirTVSeries = () => {
    const dispatch = useDispatch();

    const getOnAirTVSeries = async () => {
        const data = await fetch(ON_AIR_TV_SERIES_API,API_OPTIONS)
        const json = await data.json();
        dispatch(addOnAirTVSeries(json.results))
    }

    useEffect(() => {
        getOnAirTVSeries();
    },[])
}

export default useOnAirTVSeries;