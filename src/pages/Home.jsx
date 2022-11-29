import { useState, useEffect } from 'react';
import * as MovieService from 'api/fetchTrendingMovies';
import { TrendingMoviesList } from 'components/TrendingMovies/TrendingMoviesList';
import Notiflix from 'notiflix';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const { results } = await MovieService.fetchTrendingMovies();
        if (results.length > 0) {
          setTrendingMovies([...trendingMovies, ...results]);
        }
      } catch (error) {
        Notiflix.Notify.failure('Failed to load trending movies.');
      }
    }
    getTrendingMovies();
    // eslint-disable-next-line
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      <TrendingMoviesList trendingMovies={trendingMovies}></TrendingMoviesList>
    </main>
  );
};

export default Home;
