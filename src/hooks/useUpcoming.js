import { useDispatch } from "react-redux";
import { API_OPTION } from "../utlis/contant";
import { addUpcomingMovies } from "../utlis/moviesSlice";
import { useEffect } from "react";


const useUpcomingMovies = () => {

     //fecthing the data from TMDB of movies and stores in redux store
     const dispatch = useDispatch();

     const getUpcomingMovies = async ()=> {
         const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION)
         const json = await data.json();
        //  console.log(json.results);
         dispatch(addUpcomingMovies(json.results));
     }
     useEffect(() => {
        getUpcomingMovies();
     },[]) 
}

export default useUpcomingMovies;