import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '53d36a46b9069260a6b19b0d73ae2aba';

export const getSearchedMovies = async query => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=true`
    );

    return data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
};
