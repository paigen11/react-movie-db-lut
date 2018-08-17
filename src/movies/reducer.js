import { GET_MOVIES, GET_MOVIE, RESET_MOVIE } from './actions';

// only represents initial state for this particular reducer
const initialState = {
  movies: [],
  moviesLoaded: false,
  moviesLoadedAt: null,
  movie: {},
  movieLoaded: false,
};

// nice for unnamed default exports for functions - can't be done with arrow functions
export default function(state = initialState, action) {
  // sets a var called type to action.type
  // because of the data in the movies action, now we import that too
  const { type, data } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: data,
        moviesLoaded: true,
        moviesLoadedAt: new Date(),
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: data,
        movieLoaded: true,
      };
    case RESET_MOVIE:
      return {
        ...state,
        movie: {},
        movieLoaded: false,
      };
    default:
      return state;
  }
}
