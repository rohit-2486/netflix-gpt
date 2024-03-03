import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { AVTAR_LOGO } from "../utlis/contant";

const GptSearch = () => {
    return (
      <>
        <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-auto "
          src={AVTAR_LOGO}   alt="Logo"
        />
      </div>
        <div className=" ">
          <GptSearchBar />  
           <GptMovieSuggestion />
        </div>
      </>
    );
  };
  export default GptSearch;