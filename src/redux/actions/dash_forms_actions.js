import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllSpecialist = createAsyncThunk('/dash/specialists', async () => {
 const response = await axios.get(`/specialist`)
 return response.data
})

export const getAllInstitutions = createAsyncThunk('/dash/institutions', async () => {
 const response = await axios.get(`institution`)
 return response.data
})

export const getAllOrganizations = createAsyncThunk('/dash/organizations', async () => {
 const response = await axios.get('organization')
 return response.data
})

export const getAllAreas = createAsyncThunk('/dash/areas', async () => {
 const response = await axios.get(`areas`)
 return response.data
})

export const getAllPersons = createAsyncThunk('/dash/persons', async () => {
 const response = await axios.get(`person`)
 return response.data
})

export const getInstitution = createAsyncThunk('dash/institution', async (id) => {
 const response = await axios.get(`institution/${id}`)
 return response.data
})

export const getOrganization = createAsyncThunk('dash/organization', async (id) => {
 const response = await axios.get(`organization/${id}`)
 return response.data
})

export const getSpecialist = createAsyncThunk('dash/specialist', async (id) => {
 const response = await axios.get(`specialist/${id}`)
 return response.data
})

export const getAllMessages = createAsyncThunk('dash/messages', async () => {
 const response = await axios.get('contact')
 return response.data
})