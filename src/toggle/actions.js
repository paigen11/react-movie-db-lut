// this is a way to use string constants, even though it's annoying to use constant variables
export const TOGGLE_MESSAGE = 'TOGGLE_MESSAGE';

export function toggleMessage() {
  return {
    type: 'TOGGLE_MESSAGE',
  };
}
