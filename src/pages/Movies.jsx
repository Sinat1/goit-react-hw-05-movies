import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { getSearchedMovies } from 'api/getSearchedMovies';
import { SearchedMoviesList } from 'components/SearchedMoviesList/SearchedMoviesList';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const movieTitle = searchQuery.get('query') ?? '';

  useEffect(() => {
    if (movieTitle === '') {
      return;
    }

    async function getMovies() {
      try {
        const { results } = await getSearchedMovies(movieTitle);
        if (results.length > 0) {
          setMovies([...movies, ...results]);
          Notiflix.Notify.success('Hoooray, we found something.');
        } else {
          if (results.length === 0) {
            Notiflix.Notify.failure("We didn't find anything =(");
          }
        }
      } catch (error) {
        Notiflix.Notify.failure('Failed to load searched Movies.');
      }
    }
    getMovies();
    // eslint-disable-next-line
  }, [movieTitle]);

  const handleFormSubmit = query => {
    if (movieTitle === query) {
      return;
    }

    const newQuery = query !== '' ? { query } : {};
    setSearchQuery(newQuery);
    setMovies([]);
  };

  return (
    <main>
      <SearchBar onSubmit={handleFormSubmit} />
      <SearchedMoviesList movies={movies} />
    </main>
  );
};

export default Movies;
