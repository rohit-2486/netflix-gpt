import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.playingMoviesNow);
  const popular = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  return (
    /* 
            MovieList-popular
                - movieCard * n
            MovieList-playing Now
            MovieList-Horror
            MovieList-trending
        */
    movies && (
       
      
        <div className="bg-black">
        <div className=" mt-0 md:-mt-48 relative z-20 pl-1 md:pl-12">
        <MovieList title={"Top-Rated"} movies={topRatedMovies} />
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular Movies"} movies={popular} />
        <MovieList title={"Trending Movies"} movies={topRatedMovies} />
        <MovieList title={"upcoming"} movies={upcomingMovies} />
        
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
