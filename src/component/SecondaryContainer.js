import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    /* 
            MovieList-popular
                - movieCard * n
            MovieList-playing Now
            MovieList-Horror
            MovieList-trending
        */
    movies.playingMoviesNow && (
       
      
        <div className="bg-black">
        <div className="-mt-48 relative z-20 pl-12">
        <MovieList title={"Top-Rated"} movies={movies.topRated} />
        <MovieList title={"Now Playing"} movies={movies.playingMoviesNow} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Trending Movies"} movies={movies.topRated} />
        <MovieList title={"upcoming"} movies={movies.upcomingMovies} />
        
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
