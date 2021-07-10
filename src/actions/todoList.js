export const GET_TODO_LIST = "GET_TODO_LIST";

const payload = [
  {
    id: 1,
    name: "Marco",
    lastname: "Mendoza",
    age: 33,
    country: "Mexico",
    state: "Quintana Roo"
  }
];

const URL_BASE = "https://jsonplaceholder.typicode.com";

export const getTodoList = () => {
  const PATH = "/todos";
  return function (dispatch) {
    return fetch(URL_BASE + PATH)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: GET_TODO_LIST, payload: res });
      });
  };
};
