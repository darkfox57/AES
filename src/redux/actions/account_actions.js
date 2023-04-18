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
 const response = await axios.post('/auth/logOut', {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })
 return response.data
})

export const userValidation = createAsyncThunk('login/validation', async (token) => {
 try {
  const response = await axios.post('/auth/validation', token, {
   headers: {
    'Authorization': `Bearer ${token}`
   }
  })
  return response.data
 } catch (error) {
  return error.response.data
 }
})

export const getAllUsers = createAsyncThunk('login/getAllUsers', async () => {
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

export const getUser = createAsyncThunk('login/getUser', async (user_id) => {
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

export const updateUser = createAsyncThunk('login/updateUser', async (userData) => {
 const formatedpost = {
  'firstname': userData.firstname,
  'lastname': userData.lastname,
  'email': userData.email,
  'password': userData.password,
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

export const getRoles = createAsyncThunk('login/getRoles', async () => {
 const response = await axios.get('roles', {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })
 return response.data

})


