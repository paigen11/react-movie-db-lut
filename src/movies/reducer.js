import { GET_MOVIES } from './actions';

const initialState = {
  movies: [],
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
      };
    default:
      return state;
  }
}
