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

export const getAllUsers = createAsyncThunk('login/getAllUsers', async () => {
 try {
  const response = await axios.get('users')
  return response.data
 }
 catch (error) {
  return error.response.data
 }
})

export const getUser = createAsyncThunk('login/getUser', async (user_id) => {
 try {
  const response = await axios.get(`users/${user_id}`)
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
  console.log('redux: ', formatedpost);
  const response = await axios.put(`users/${userData.id}`, formatedpost)
  return response.data
 }
 catch (error) {
  return error.response.data
 }
})

export const getRoles = createAsyncThunk('login/getRoles', async () => {
 const response = await axios.get('roles')
 return response.data

})

