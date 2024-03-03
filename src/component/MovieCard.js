import {CDN_URL} from "../utlis/contant"
const MovieCard = ({posterPath}) => {
    if(!posterPath) return null;

    return (
        <div className="w-36 md:w-48 pr-5">
             <img src={CDN_URL+posterPath}  alt="movie Card" />
        </div>
    )
}
export default MovieCard;