import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  StyledTrendingMoviesList,
  StyledTrendingMovieItem,
  StyledTrendingMovieImg,
  StyledTrendingMovieTitle,
  StyledLink,
  StyledWrapper,
} from './TrendingMoviesList.styled';

export const TrendingMoviesList = ({ trendingMovies }) => {
  const location = useLocation();

  return (
    <StyledTrendingMoviesList>
      {trendingMovies.map(movie => (
        <StyledTrendingMovieItem key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <StyledTrendingMovieImg
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <StyledTrendingMovieTitle>{movie.title}</StyledTrendingMovieTitle>
            <StyledWrapper>
              <p>Release: {movie.release_date}</p>
              <p>Rating: {movie.vote_average.toFixed(1)}</p>
            </StyledWrapper>
          </StyledLink>
        </StyledTrendingMovieItem>
      ))}
    </StyledTrendingMoviesList>
  );
};

TrendingMoviesList.propTypes = {
  trendingMovies: PropTypes.array.isRequired,
};
