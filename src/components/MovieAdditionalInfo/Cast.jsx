import { getMovieCredits } from 'api/getMovieCredits';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        const results = await getMovieCredits(id);

        setCastInfo(results.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCast(id);
  }, [id]);

  return (
    <ul>
      {castInfo.map(cast => (
        <li key={cast.id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
            alt={cast.original_name}
          />
          <h4>{cast.original_name}</h4>
          Character: {cast.character}
        </li>
      ))}
    </ul>
  );
};
