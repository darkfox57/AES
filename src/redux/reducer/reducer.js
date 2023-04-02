
import {
  GET_ALL_BLOGS,
  GET_ALL_EVENTS, GET_BLOG,
  GET_CATEGORIES, GET_ERROR,
  GET_EVENT,
} from '../actions/actions';

const initialState = {
  blogs: [],
  blog: {},
  events: [],
  event: {},
  categories: [],
  categorie: {},
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      }
    case GET_BLOG:
      return {
        ...state,
        blog: action.payload,
      }
    case GET_ALL_EVENTS:
      return {
        ...state,
        events: action.payload,
      }
    case GET_EVENT:
      return {
        ...state,
        event: action.payload,
      }
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    case GET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}