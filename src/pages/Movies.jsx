import { useState, useEffect } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { getSearchedMovies } from 'api/getSearchedMovies';
import { SearchedMoviesList } from 'components/SearchedMoviesList/SearchedMoviesList';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (!query) {
      return;
    }

    async function getMovies(query) {
      try {
        const { results } = await getSearchedMovies(query);
        if (results.length > 0) {
          setMovies([...movies, ...results]);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies(query);
    // eslint-disable-next-line
  }, [query]);

  const handleFormSubmit = query => {
    if (query) {
      setQuery(query);
      setMovies([]);
    }
  };

  return (
    <main>
      <SearchBar onSubmit={handleFormSubmit} />
      <SearchedMoviesList movies={movies} />
    </main>
  );
};
