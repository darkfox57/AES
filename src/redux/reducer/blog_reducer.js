import { createSlice } from '@reduxjs/toolkit';
import {
  addBlog,
  deleteBlog,
  editBlog,
  getAllBlogs,
  getBlog,
  getBlogTitle,
  getCategories
} from '../actions/blog_actions';

const initialState = {
  blogs: [],
  blog: {},
  categories: [],
  status: null,
  error: null,
  newBlog: {},
  confirmation: ''
}

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(getBlog.fulfilled, (state, action) => {
        state.blog = action.payload
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(getBlogTitle.fulfilled, (state, action) => {
        state.blogs = action.payload
      })
      .addCase(getBlogTitle.rejected, (state, action) => {
        state.error = action.error.message
      })

      .addCase(addBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload)
      })
      .addCase(addBlog.rejected, (state, action) => {
        state.status = action.error.message
        state.error = action.error.message
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.confirmation = action.payload
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.error = action.payload
      })
      .addCase(editBlog.fulfilled, (state, action) => {
        state.confirmation = action.payload;
      })
  },
})

export default blogSlice.reducer
