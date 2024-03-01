import { useDispatch } from "react-redux";
import { API_OPTION } from "../utlis/contant";
import { addPlayingMoviesNow } from "../utlis/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () => {

     //fecthing the data from TMDB of movies and stores in redux store
     const dispatch = useDispatch();

     const getNowPlayingMovies = async ()=> {
         const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTION)
         const json = await data.json();
        //  console.log(json.results);
         dispatch(addPlayingMoviesNow(json.results));
     }
     useEffect(() => {
         getNowPlayingMovies();
     },[]) 
}

export default useNowPlayingMovies;