import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcoming";

import Header from "./Header";
import MainCotainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"; 
import GptSearch from "./GptSearch";
const Browse = () => {
  const showGptSearchView = useSelector((store) => store.gpt.showGptSearchView);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainCotainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
