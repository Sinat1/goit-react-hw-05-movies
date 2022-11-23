import axios from 'axios';

const API_KEY = '53d36a46b9069260a6b19b0d73ae2aba';

export const getMovieById = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=1/movies/${id}`
    );
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
};
