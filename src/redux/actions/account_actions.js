import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('login/validate', async (userData) => {
 try {
  const response = await axios.post('/auth/login', userData)
  return response.data
 } catch (error) {
  return error.response.data
 }
})

export const logOut = createAsyncThunk('logOut', async () => {
 const response = await axios.post('/auth/logOut')
 return response.data
})

export const userValidation = createAsyncThunk('login/validation', async (token) => {
 try {
  const response = await axios.post('/auth/validation', token)
  return response.data
 } catch (error) {
  return error.response.data
 }
})

export const getUser = createAsyncThunk('login/getUser', async (id) => {
 try {
  const response = await axios.get(`users/${id}`)
  return response.data
 }
 catch (error) {
  return error.response.data
 }
})