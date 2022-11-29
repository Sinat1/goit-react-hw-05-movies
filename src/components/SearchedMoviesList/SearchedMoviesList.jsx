import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SearchedMoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

SearchedMoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
