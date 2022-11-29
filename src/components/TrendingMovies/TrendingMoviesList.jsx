import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const TrendingMoviesList = ({ trendingMovies }) => {
  const location = useLocation();

  return (
    <ul>
      {trendingMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

TrendingMoviesList.propTypes = {
  trendingMovies: PropTypes.array.isRequired,
};
