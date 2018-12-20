import * as ReadableAPI from "../utils/api";
import { RECEIVE_CATEGORIES } from "./types";

export const receiveCategories = categories => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

export const fetchCategories = () => {
  return dispatch => {
    return ReadableAPI.fetchCategories().then(categories =>
      dispatch(receiveCategories(categories))
    );
  };
};
