import axios from 'axios';

const API_KEY = '53d36a46b9069260a6b19b0d73ae2aba';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.params = {
//     media_type: 'movie',
//     time_window: 'day',
// };

export const fetchTrendingMovies = async () => {
  // const { data } = await axios.get(`?api_key=${API_KEY}&page=1`);
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=1`
  );

  return data;
};

