import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const token = localStorage.getItem('access_token');

export const getAllSpecialist = createAsyncThunk('/dash/specialists', async () => {
 const response = await axios.get(`/specialist`, {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })
 return response.data
})

export const getAllInstitutions = createAsyncThunk('/dash/institutions', async () => {
 const response = await axios.get(`institution`, {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })
 return response.data
})

export const getAllOrganizations = createAsyncThunk('/dash/organizations', async () => {
 const response = await axios.get('organization', {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })
 return response.data
})

export const getAllAreas = createAsyncThunk('/dash/areas', async () => {
 const response = await axios.get(`areas`)
 return response.data
})

export const getAllPersons = createAsyncThunk('/dash/persons', async () => {
 const response = await axios.get(`person`, {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })
 return response.data
})

export const getInstitution = createAsyncThunk('dash/institution', async (id) => {
 const response = await axios.get(`institution/${id}`, {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })
 return response.data
})

export const getOrganization = createAsyncThunk('dash/organization', async (id) => {
 const response = await axios.get(`organization/${id}`, {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })
 return response.data
})

export const getSpecialist = createAsyncThunk('dash/specialist', async (id) => {
 const response = await axios.get(`specialist/${id}`, {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })
 return response.data
})

export const getAllMessages = createAsyncThunk('dash/messages', async () => {
 const response = await axios.get('contact', {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })
 return response.data
})

export const getMessage = createAsyncThunk('dash/messages/message', async (id) => {
 const response = await axios.get(`contact/${id}`, {
  headers: {
   'Authorization': `Bearer ${token}`
  }
 })
 return response.data
})