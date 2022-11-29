import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '53d36a46b9069260a6b19b0d73ae2aba';

export const getMovieCredits = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
};
