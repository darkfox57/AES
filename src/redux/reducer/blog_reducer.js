import { createSlice } from '@reduxjs/toolkit'
import { addBlog, getAllBlogs, getBlog, getCategories } from '../actions/blog_actions'

const initialState = {
  blogs: [],
  blog: {},
  categories: [],
  status: null,
  error: null,
  newBlog: {}
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
  },
})

export default blogSlice.reducer
