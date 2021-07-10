const INITIAL_STATE = { list: null };

export function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_TODO_LIST":
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
