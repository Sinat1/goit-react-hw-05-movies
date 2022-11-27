import { useParams } from 'react-router-dom';
import { getMovieById } from 'api/getMovieById';
import { useState, useEffect } from 'react';

export const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [movieGenres, setMovieGenres] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const results = await getMovieById(id);

        setMovieInfo(results);
        setMovieGenres(results.genres.map(genre => genre.name).join(', '));
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails(id);
  }, [id]);

  console.log(movieInfo);
  return (
    <>
      {movieInfo && (
        <main>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`}
            alt={movieInfo.original_title}
          />
          <h3>{movieInfo.name}</h3>
          <p>User score: {movieInfo.vote_average.toFixed(1) * 10}%</p>
          <h4>Overview</h4>
          <p>{movieInfo.overview}</p>
          <h5>Genres</h5>
          {movieGenres && <p>{movieGenres}</p>}
        </main>
      )}
    </>
  );
};
