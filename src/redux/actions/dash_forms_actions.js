import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllSpecialist = createAsyncThunk('/dash/specialist', async () => {
 const response = await axios.get(`/specialist`)
 return response.data
})

export const getAllInstitutions = createAsyncThunk('/dash/institution', async () => {
 const response = await axios.get(`institution`)
 return response.data
})

export const getAllOrganizations = createAsyncThunk('/dash/organization', async () => {
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