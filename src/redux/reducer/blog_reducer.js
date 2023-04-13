import { createAction, createSlice } from '@reduxjs/toolkit'
import {
  OrderBlog,
  addBlog,
  deleteBlog,
  editBlog,
  filterCategory,
  filterTags,
  getAllBlogs,
  getBlog,
  getBlogTitle,
  getCategories,
  getTags,
} from '../actions/blog_actions'

const initialState = {
  blogs: [],
  copyblogs: [],
  blog: {},
  tags: [],
  categories: [],
  status: null,
  error: null,
  newBlog: {},
  confirmation: '',
}

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    resetBlogState: (state, action) => {
      state.blog = initialState.blog
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload.reverse()
        state.copyblogs = action.payload.filter((post) => post.status)
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
        state.confirmation = action.payload
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
        state.confirmation = action.payload
      })

      .addCase(getTags.fulfilled, (state, action) => {
        state.tags = action.payload
      })
      .addCase(getTags.rejected, (state, action) => {
        state.error = action.payload
      })

      .addCase(filterCategory.fulfilled, (state, action) => {
        const blogCategory = state.copyblogs.filter((blog) =>
          blog.categories.some((category) => category.name === action.payload)
        )
        state.blogs = blogCategory
      })

      .addCase(filterTags.fulfilled, (state, action) => {
        const blogTag = state.copyblogs.filter((blog) =>
          blog.tags.some((tag) => tag.name === action.payload)
        )
        state.blogs = blogTag
      })
      .addCase(OrderBlog.fulfilled, (state, action) => {
        const sortOptions = {
          title: {
            asc: (a, b) => a.title.localeCompare(b.title),
            desc: (a, b) => b.title.localeCompare(a.title),
          },
          fecha: {
            asc: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
            desc: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
          },
        }

        state.blogs = [...state.blogs].sort(
          sortOptions[action.payload.type][action.payload.sort]
        )
      })
  },
})

export const resetBlogState = createAction('blogs/resetBlogState')
export default blogSlice.reducer

