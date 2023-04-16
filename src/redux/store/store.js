
import { configureStore } from '@reduxjs/toolkit';
import AccountReducer from '../reducer/account_reducer';
import BlogReducer from '../reducer/blog_reducer';
import DashReducer from '../reducer/dash_forms_reducer';
import EventReducer from '../reducer/event_reducer';
import FilesReducer from '../reducer/files_reducer';
import FormReducer from '../reducer/form_reducer';
import GalleryReducer from '../reducer/gallery_reducer';

export default configureStore({
 reducer: {
  blog: BlogReducer,
  event: EventReducer,
  form: FormReducer,
  account: AccountReducer,
  file: FilesReducer,
  dash: DashReducer,
  gallery: GalleryReducer,
 },
});

