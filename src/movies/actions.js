// this is a way to use string constants, even though it's annoying to use constant variables
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

// this is a thunk - a reducer function that returns another action
// it dispatches the data once it gets it
export function getMovies() {
  return async function(dispatch) {
    const res = await fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    );
    const movies = await res.json();
    return dispatch({
      type: 'GET_MOVIES',
      data: movies.results,
    });
  };
}

export function getMovie(id) {
  return async function(dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fec8b5ab27b292a68294261bb21b04a5&language=en-US`,
    );
    const movie = await res.json();
    return dispatch({
      type: 'GET_MOVIE',
      data: movie,
    });
  };
}

export function resetMovie() {
  return {
    type: 'RESET_MOVIE',
  };
}
