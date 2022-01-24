import { createStore } from "redux";

const INITIALSTATE = {
  genres : [],
  images_url : "",
  n : 0,
  results : [],
  checkboxList : [],
  order : "",
  search : ""
};

const reducer = (state = INITIALSTATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET__MOVIES":
      return {
        genres : payload.genres,
        images_url : payload.images_url,
        n : payload.n,
        results : payload.results,
      };
    case "UPDATE__CHECKBOX__LIST":
      return { ...state, checkboxList: payload };
    case "UPDATE__ORDER":
      return { ...state, order: payload };
    case "UPDATE__SEARCH":
      return { ...state, search: payload };
    default:
      return state;
  };
};

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())