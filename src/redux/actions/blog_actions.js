import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
const token = localStorage.getItem('access_token');

// const MySwal = withReactContent(Swal)

export const getAllBlogs = createAsyncThunk('blogs/getAllBlogs', async () => {
  const response = await axios.get('blogs')
  return response.data.reverse()
})

export const getBlog = createAsyncThunk('blogs/getBlog', async (slug) => {
  const response = await axios.get(`blogs?slug=${slug}`)
  return response.data
})

export const getBlogTitle = createAsyncThunk('blogs/getBlogTitle', async (title) => {
  const response = await axios.get(`blogs?search=${title}`)
  return response.data
})

export const addBlog = createAsyncThunk('blogs/addBlog', async (post) => {
  const formatedpost = {
    'title': post.title,
    'description': post.description,
    'image': post.image,
    'categories': post.categories,
    'status': post.status,
    'tags': post.tags,
    'files': post.files,
    'short_description': post.short_description
  }
  try {
    const response = await axios.post('blogs', formatedpost, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if (response.data.message) {

      await Swal.fire({
        icon: 'success',
        title: 'Genial',
        text: response.data.message,
      })
    }
    return response.data
  }
  catch (error) {
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.response.data.errors[0].msg} ${error.response.data.errors[0].param}`,
    })
    return error.response.data
  }
})

export const editBlog = createAsyncThunk('blogs/editBlog', async (post) => {
  const formatedpost = {
    'title': post.title,
    'description': post.description,
    'image': post.image,
    'categories': post.categories,
    'status': post.status,
    'tags': post.tags,
    'files': post.files,
    'short_description': post.short_description
  }


  try {
    const response = await axios.put(`blogs/${post._id}`, formatedpost, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if (response.data.message) {

      await Swal.fire({
        icon: 'success',
        title: 'Genial',
        text: response.data.message,
      })
    }
    return response.data
  }
  catch (error) {
    await Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.response.data.errors[0].msg} ${error.response.data.errors[0].param}`,
    })
    return error.response.data
  }
})

export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (id) => {
  const response = await axios.delete(`blogs/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return response.data
})

export const getTags = createAsyncThunk('blogs/getTagBlog', async () => {
  const response = await axios.get('tags')
  return response.data
})

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const response = await axios.get('category')
    return response.data
  }
)

export const addCategory = createAsyncThunk('categories/add', async (post) => {
  const response = await axios.post('category', post, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return response.data
})

export const editCategory = createAsyncThunk('categories/edit', async (post) => {
  const response = await axios.put(`category/${post.id}`, post, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return response.data
})

export const deleteCategory = createAsyncThunk('categories/delete', async (id) => {
  const response = await axios.delete(`category/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return response.data
})



export const addTag = createAsyncThunk('tags/add', async (post) => {
  const response = await axios.post('tags', post, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return response.data
})

export const editTag = createAsyncThunk('tag/edit', async (post) => {
  const response = await axios.put(`tags/${post.id}`, post, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return response.data
})

export const deleteTag = createAsyncThunk('tags/delete', async (id) => {
  const response = await axios.delete(`tags/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return response.data
})


export const filterCategory = createAsyncThunk('blogs/filterCategory', async (category) => {
  return category
})

export const OrderBlog = createAsyncThunk('blogs/OrderBlog', async (type) => {
  return type
})
export const filterTags = createAsyncThunk('blogs/filterTags', async (tag) => {
  return tag
})

//**ordenamiento dashborar */

export const OrderDasboard = createAsyncThunk('blogs/OrderDasboard', async (type) => {
  return type
})



