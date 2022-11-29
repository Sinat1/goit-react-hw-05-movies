import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';
import {
  StyledMoviesList,
  StyledMovieItem,
  StyledLink,
  StyledMovieImg,
  StyledMovieTitle,
  StyledWrapper,
  StyledInfo,
} from './SearchedMoviesList.styled';

export const SearchedMoviesList = ({ movies, isLoading }) => {
  const location = useLocation();

  return (
    <>
      {isLoading && <Loader />}
      <StyledMoviesList>
        {movies.map(movie => (
          <StyledMovieItem key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <StyledMovieImg
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <StyledMovieTitle>{movie.title}</StyledMovieTitle>
              <StyledWrapper>
                <StyledInfo>Release: {movie.release_date}</StyledInfo>
                <StyledInfo>Rating: {movie.vote_average.toFixed(1)}</StyledInfo>
              </StyledWrapper>
            </StyledLink>
          </StyledMovieItem>
        ))}
      </StyledMoviesList>
    </>
  );
};

SearchedMoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
