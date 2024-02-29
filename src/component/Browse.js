import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

import Header from "./Header";
import MainCotainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    useNowPlayingMovies();
   

    return(
    <div>
         <Header/>
         <MainCotainer/>
         <SecondaryContainer/>
         { /*
            -MainCotainer
              -videoBackground
              -videoTitle
            -secondaryContainer
              -MovieList * n
              -cardList * n  
            */}
    </div> 
)

}
export default Browse;