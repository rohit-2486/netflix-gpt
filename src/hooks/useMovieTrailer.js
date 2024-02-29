import { useDispatch } from "react-redux";
import { API_OPTION } from "../utlis/contant";
import { addTrailerVideo } from "../utlis/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  // fecth the movie api and wants movieId to display video
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );

    const json = await data.json();
    // console.log(json);

    const filterData = json.results?.filter((video) => video.type === "Trailer");
    const trailer =  filterData && filterData.length ? filterData[0] : json.results?.[0];
    // setTrailerVideo(trailer.key);
    dispatch(addTrailerVideo(trailer));
    // console.log(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
