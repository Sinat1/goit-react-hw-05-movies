import { useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'api/getMovieById';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Notiflix from 'notiflix';
import {
  Wrapper,
  GoBackBtn,
  StyledLink,
  StyledMovieImg,
  StyledMovieTitle,
  StyledMovieInfoWrapper,
  StyledMovieRating,
  StyledMovieOverViewTitle,
  StyledMovieOverView,
  StyledMovieGenresTitle,
  AdditionalInfoWrapper,
  AdditionalInfoTitle,
  AdditionalInfoList,
  AdditionalInfoItem,
  AdditionalInfoLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [movieGenres, setMovieGenres] = useState('');
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const results = await getMovieById(id);

        setMovieInfo(results);
        setMovieGenres(results.genres.map(genre => genre.name).join(', '));
      } catch (error) {
        Notiflix.Notify.failure('Failed to get movie info.');
      }
    }
    getMovieDetails(id);
  }, [id]);

  return (
    <>
      {movieInfo && (
        <main>
          <GoBackBtn type="button">
            <StyledLink to={backLinkHref}>{'<— Go back'}</StyledLink>
          </GoBackBtn>
          <Wrapper>
            <div>
              <StyledMovieImg
                src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
                alt={movieInfo.original_title}
              />
            </div>
            <StyledMovieInfoWrapper>
              <StyledMovieTitle>{movieInfo.original_title}</StyledMovieTitle>
              <StyledMovieRating>
                User score: {movieInfo.vote_average.toFixed(1) * 10}%
              </StyledMovieRating>
              <StyledMovieOverViewTitle>Overview</StyledMovieOverViewTitle>
              <StyledMovieOverView>{movieInfo.overview}</StyledMovieOverView>
              <StyledMovieGenresTitle>Genres</StyledMovieGenresTitle>
              {movieGenres && <p>{movieGenres}</p>}
            </StyledMovieInfoWrapper>
          </Wrapper>
          <AdditionalInfoWrapper>
            <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
            <AdditionalInfoList>
              <AdditionalInfoItem>
                <AdditionalInfoLink to={'cast'} state={{ from: backLinkHref }}>
                  {'—> Cast <—'}
                </AdditionalInfoLink>
              </AdditionalInfoItem>
              <AdditionalInfoItem>
                <AdditionalInfoLink
                  to={'reviews'}
                  state={{ from: backLinkHref }}
                >
                  {'—> Reviews <—'}
                </AdditionalInfoLink>
              </AdditionalInfoItem>
            </AdditionalInfoList>
            <Outlet />
          </AdditionalInfoWrapper>
        </main>
      )}
    </>
  );
};

export default MovieDetails;
