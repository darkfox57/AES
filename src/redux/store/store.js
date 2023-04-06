import { configureStore } from '@reduxjs/toolkit';
import AccountReducer from '../reducer/account_reducer';
import BlogReducer from '../reducer/blog_reducer';
import EventReducer from '../reducer/event_reducer';
import FormReducer from '../reducer/form_reducer';

export default configureStore({
 reducer: {
  blog: BlogReducer,
  event: EventReducer,
  account: AccountReducer
 },
});
