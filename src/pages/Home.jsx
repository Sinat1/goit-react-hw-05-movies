import { useState, useEffect } from 'react';
import * as MovieService from 'api/fetchTrendingMovies';
import { TrendingMoviesList } from 'components/TrendingMovies/TrendingMoviesList';
export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const { results } = await MovieService.fetchTrendingMovies();
        setTrendingMovies([...trendingMovies, ...results]);
      } catch (error) {
        console.log(error.message);
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
