import { configureStore } from '@reduxjs/toolkit';
import BlogReducer from '../reducer/blog_reducer';
import EventReducer from '../reducer/event_reducer';

export default configureStore({
 reducer: {
  blog: BlogReducer,
  event: EventReducer
 },
});
