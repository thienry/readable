import { RECEIVE_POSTS, RECEIVE_POST } from "../actions/types";

const initalState = {
  posts: [],
  post: undefined
}

const posts = (state = initalState, action) => {
  const { posts, post } = action;
  switch (action.type) {
    case RECEIVE_POSTS:
      return posts;
    case RECEIVE_POST:
      return post;
    default:
      return state;
  }
};

export default posts;
