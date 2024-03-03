import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import "./MovieList.css"; 
const MovieList = ({ title, movies }) => { 
  return (
    <div className="px-6   ">
        <h1 className="text-xl md:text-3xl py-2 text-white">{title}</h1>

      <div className="flex overflow-x-scroll scrollbar">
        <div className="flex">
        {movies &&
            movies.map((elem) => {
              return (
                <Link to={"/movie/" + elem.id} key={elem.id}>
                  <MovieCard posterPath={elem.poster_path}  />;
                </Link>
              );
            })}


            {/* {movies?.map((movie , index) => <MovieCard key={index} posterPath={movie?.poster_path} />)} */}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
