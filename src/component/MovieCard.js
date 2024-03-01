import {CDN_URL} from "../utlis/contant"
const MovieCard = ({posterPath}) => {
    return (
        <div className="w-48 pr-5">
             <img src={CDN_URL+posterPath}  alt="movie Card" />
        </div>
    )
}
export default MovieCard;