import { useDispatch, useSelector } from "react-redux";
import lang from "../utlis/languageConstant";
import { useRef } from "react";
import openai from "../utlis/openAi";
import { API_OPTION } from "../utlis/contant";
import { addGptMovieResult } from "../utlis/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTNDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of 5  movie , comma seperated like the expample result given ahead. Example result : gadar, sholay , Don , salaar ,golmal";

    //make an API call to GPT api and get Movies Result
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // Andaz apna apna , chup-chupk ,.... all movies comes in array after split

    // Now we will fetch the movies details from  TMDB using movie names

    const promiseArray = gptMovies.map((movies) => searchMovieTNDB(movies));
    // [promise, promise , promise, promise promise] we will get 5 promises because searchMovieTNDB takes time to fetch movie data for wait for fetch data we use promiseall

    const tndbresults = await Promise.all(promiseArray);
    console.log(tndbresults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tndbresults })
    );
  };

  return (
    <div className="gpt-searchbar pt-[40%] md:pt-[10%] flex justify-center ">
      <form
        className="w-full md:w-1/2  grid grid-cols-12 rounded-lg bg-black border border-white "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className=" p-2 md:p-4 my-2 md:my-4 ml-2 rounded-lg col-span-9 "
        ></input>
        <button
          className=" md:pr-4  my-4 mx-2 bg-red-500 text-white col-span-3 rounded-lg font-bold"
          type="submit"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
