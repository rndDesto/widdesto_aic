import axios from 'axios';

const OMDBAPI = 'http://www.omdbapi.com';


const fetch = (url, method, param1, param2) => {
  return new Promise((resolve, reject) => {
    axios[method](url, param1, param2)
      .then(res => resolve(res.data))
      .catch(err => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.'
        };
        if (!err.response) reject(defaultError);
        else if (!err.response.data) reject(defaultError);
        else reject(err.response.data);
      });
  });
};

export const getMovies = async (title) => (
  await fetch(`${OMDBAPI}/?s=${title}&plot=full&apikey=761befef`, 'get')
);

export const getMovieDetail = async (id) => (
  await fetch(`${OMDBAPI}/?i=${id}&apikey=761befef`, 'get')
);
