import { useSelector } from "react-redux";
import VideoTittle from "./VideoTittle";
import VideoBackground from "./VideoBackground";

const MainCotainer =() => {
    const movies = useSelector((store) => store.movies?.playingMoviesNow)
    if(!movies) return;
    const mainMovie = movies[1]
//    console.log (mainMovie);

    const { original_title , overview , id} = mainMovie; 

    return (
        <div>
        <VideoTittle original_title = {original_title} overview = {overview}/>
        <VideoBackground movieId = {id} />

        </div>
    )
}
export default MainCotainer;
