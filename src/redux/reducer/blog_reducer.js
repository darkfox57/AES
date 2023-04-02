import { createSlice } from '@reduxjs/toolkit'
import { getAllBlogs, getBlog, getCategories } from '../actions/blog_actions'

const initialState = {
  blogs: [],
  blog: {},
  categories: [],
  error: null,
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
      .addCase(getBlog.fulfilled, (state, action) => {
        state.blog = action.payload
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.error.message
      })
  },
})

export default blogSlice.reducer
