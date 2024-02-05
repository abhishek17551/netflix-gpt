import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoInfo from './VideoInfo';

const VideoBillboard = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(movies === null) return;

    const billboardMovie = movies[2];

    const {original_title, overview, release_date } = billboardMovie
    console.log(typeof(release_date))
  
  return (
    <div>
        <VideoBackground />
        <VideoInfo title={original_title} overview={overview} date={release_date}/>
    </div>
  )
}

export default VideoBillboard