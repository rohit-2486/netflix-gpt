import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { AVTAR_LOGO } from "../utlis/contant";

const GptSearch = () => {
    return (
      <>
        <div className="absolute -z-20">
        <img
          src={AVTAR_LOGO}   alt="Logo"
        />
      </div>
        <div className="">
          <GptSearchBar />  
           <GptMovieSuggestion />
        </div>
      </>
    );
  };
  export default GptSearch;