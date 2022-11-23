import { useParams } from "react-router-dom";
import {getMovieById} from 'api/getMovieById';

export const MoviesDetails = () => {
    const { id } = useParams();
    const movie = getMovieById(id);



    return (
        <main>
             <h2>
          Movie - {movie.name} - {id}
        </h2>
        </main>
    )
}