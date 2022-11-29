import { getMovieCredits } from 'api/getMovieCredits';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import {
  StyledCastList,
  StyledCastItem,
  StyledCastErrorItem,
  StyledCastImg,
} from './Cast.styled';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        const results = await getMovieCredits(id);

        setCastInfo(results.cast);
      } catch (error) {
        Notiflix.Notify.failure('Failed to load cast');
      }
    }
    getMovieCast(id);
  }, [id]);

  return (
    <StyledCastList>
      {castInfo.length > 0 ? (
        castInfo.map(cast => (
          <StyledCastItem key={cast.id}>
            <StyledCastImg
              src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
              alt={cast.original_name}
            />
            <h4>{cast.original_name}</h4>
            Character: {cast.character}
          </StyledCastItem>
        ))
      ) : (
        <StyledCastErrorItem>
          We don't have any information about this movie's cast. 😢
        </StyledCastErrorItem>
      )}
    </StyledCastList>
  );
};

export default Cast;
