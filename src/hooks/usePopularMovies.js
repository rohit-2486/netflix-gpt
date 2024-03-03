import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utlis/contant";
import { addUsePopularMovies } from "../utlis/moviesSlice";
import { useEffect } from "react";


const usePopularMovies = () => {

     //fecthing the data from TMDB of movies and stores in redux store
     const dispatch = useDispatch();
     const popularMovies = useSelector((store) => store.movies.popularMovies)
     const getPopularMovies = async ()=> {
         const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION)
         const json = await data.json();
        //  console.log(json.results);
         dispatch(addUsePopularMovies(json.results));
     }
     useEffect(() => {
      !popularMovies &&  getPopularMovies();
     },[]) 
}

export default usePopularMovies;