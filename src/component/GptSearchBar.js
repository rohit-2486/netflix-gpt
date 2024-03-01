import { useSelector } from "react-redux";
import lang from "../utlis/languageConstant";

const GptSearchBar = () => {

    const langKey = useSelector((store)=> store.config.lang)

  return (
    <div className="gpt-searchbar pt-[10%] flex justify-center ">
      <form className=" w-1/2  grid grid-cols-12 rounded-lg bg-black border border-white ">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className=" p-4  my-4 ml-2 rounded-lg col-span-9 "
        ></input>
        <button
          className=" pr-4 py-1 my-4 mx-2 bg-red-500 text-white col-span-3 rounded-lg font-bold"
          type="submit"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
