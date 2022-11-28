import { useParams, useLocation } from 'react-router-dom';
import { getMovieById } from 'api/getMovieById';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
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
        console.log(error);
      }
    }
    getMovieDetails(id);
  }, [id]);

  return (
    <>
      {movieInfo && (
        <main>
          <div>
            <button type="button">
              <Link to={backLinkHref}>Go back</Link>
            </button>
          </div>
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
          <div>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to={'cast'}>Cast</Link>
              </li>
              <li>
                <Link to={'reviews'}>Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </main>
      )}
    </>
  );
};
