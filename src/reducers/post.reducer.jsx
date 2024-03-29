import { GET_POSTS, GET_ONE_POST, LIKE_POST, UNLIKE_POST } from "../actions/post.action";

const initialState = [];

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case GET_ONE_POST:
      return action.payload;
    case LIKE_POST:
      if (!Array.isArray(state)) {
        return state;
      }
      return state.map((post) => {
        if (post._id === action.payload.postId) {
          return {
            ...post,
            likers: [action.payload.userId, ...post.likers],
          };
        }
        return post;
      });
    case UNLIKE_POST:
      if (!Array.isArray(state)) {
        return state;
      }
      return state.map((post) => {
        if (post._id === action.payload.postId) {
          return {
            ...post,
            likers: post.likers.filter((id) => id !== action.payload.userId),
          };
        }
        return post;
      });
    default:
      return state;
  }
}
