import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utlis/contant";
import { addTopRated } from "../utlis/moviesSlice";
import { useEffect } from "react";


const useTopRated = () => {

     //fecthing the data from TMDB of movies and stores in redux store
     const dispatch = useDispatch();
     const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
     const getTopRated = async ()=> { 
         const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION)
         const json = await data.json();
        //  console.log(json.results);
         dispatch(addTopRated(json.results));
     }
     useEffect(() => {
        !topRatedMovies && getTopRated();
     },[]) 
}

export default useTopRated;