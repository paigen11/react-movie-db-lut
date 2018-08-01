const initialState = {
  messageVisibility: false,
};

// nice for unnamed default exports for functions - can't be done with arrow functions
export default function(state = initialState, action) {
  // sets a var called type to action.type
  const { type } = action;
  switch (type) {
    case 'TOGGLE_MESSAGE':
      return {
        ...state,
        messageVisibility: !state.messageVisibility,
      };
    default:
      return state;
  }
}
