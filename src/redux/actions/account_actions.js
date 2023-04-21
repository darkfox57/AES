import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const token = localStorage.getItem('access_token');

export const login = createAsyncThunk('login/validate', async (userData) => {
 try {
  const response = await axios.post('/auth/login', userData)
  return response.data
 } catch (error) {
  return error.response.data
 }
})

export const logOut = createAsyncThunk('logOut', async () => {
 const response = await axios.post('/auth/logout')
 return response.data
})

export const userValidation = createAsyncThunk('login/validation', async (token_validation) => {
 try {
  const response = await axios.get('/auth/dashboard', {
   headers: {
    'Authorization': `Bearer ${token_validation}`
   }
  })
  return response.data
 } catch (error) {
  return error.response.data
 }
})

export const getAllUsers = createAsyncThunk('account/getAllUsers', async () => {
 try {
  const response = await axios.get('users', {
   headers: {
    'Authorization': `Bearer ${token}`
   }
  })
  return response.data
 }
 catch (error) {
  return error.response.data
 }
})

export const getUser = createAsyncThunk('account/getUser', async (user_id) => {
 try {
  const response = await axios.get(`users/${user_id}`, {
   headers: {
    'Authorization': `Bearer ${token}`
   }
  })
  return response.data
 }
 catch (error) {
  return error.response.data
 }
})

export const getOtherUser = createAsyncThunk('account/getOtherUser', async (id) => {
 try {
  const response = await axios.get(`users/${id}`, {
   headers: {
    'Authorization': `Bearer ${token}`
   }
  })
  return response.data
 }
 catch (error) {
  return error.response.data
 }
})

export const createUser = createAsyncThunk('account/createUser', async (userData) => {
 try {
  const response = await axios.post(`users`, userData, {
   headers: {
    'Authorization': `Bearer ${token}`
   }
  })
  return response.data
 }
 catch (error) {
  return error.response.data
 }
})

export const updateUser = createAsyncThunk('account/updateUser', async (userData) => {
 const formatedpost = {
  'firstname': userData.firstname,
  'lastname': userData.lastname,
  'email': userData.email,
  'status': userData.status,
  'roles': userData.rol,
  'avatar': userData.avatar

 }
 try {
  const response = await axios.put(`users/${userData.id}`, formatedpost, {
   headers: {
    'Authorization': `Bearer ${token}`
   }
  })
  return response.data
 }
 catch (error) {
  return error.response.data
 }
})

export const getRoles = createAsyncThunk('account/getRoles', async () => {
 const response = await axios.get('roles', {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })
 return response.data

})

export const resetPassword = createAsyncThunk('account/resetPassword', async (userData) => {
 try {
  const response = await axios.post(`auth/${userData.id}/reset-password`, userData, {
   headers: {
    'Authorization': `Bearer ${token}`
   }
  })
  return response.data
 }
 catch (error) {
  return error.response.data
 }
})

export const deleteUser = createAsyncThunk('account/delete', async (id) => {
 const response = await axios.delete(`users/${id}`, {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })
 return response.data
})

export const newPassword = createAsyncThunk('account/resetPass', async (userData) => {
 const user = {
  newpassword: userData.newpassword
 }
 const response = await axios.post(`auth/${userData.id}/change-password`, user, {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })

 return response.data
})