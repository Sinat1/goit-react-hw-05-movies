import axios from 'axios';

const API_KEY = '53d36a46b9069260a6b19b0d73ae2aba';

export const getMovieById = async id => {
  try {
    const  {data}  = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
