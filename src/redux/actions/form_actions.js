import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllForms = createAsyncThunk('/forms', async () => {
  const allForms = await axios('/forms')
  return allForms.data
})

export const getAllCountries = createAsyncThunk(
  'forms/getAllCountries',
  async () => {
    const allCountries = await axios('/country/all')
    return allCountries.data
  }
)

export const getAreas = createAsyncThunk('forms/areas', async () => {
  const response = await axios('/areas')
  return response.data
})

export const addFormSpecialist = createAsyncThunk(
  'forms/addFormSpecialist',
  async (form) => {
    form.country = 'Argentina'
    form.filepath = 'archivo.pdf'

    const createForm = await axios.post('/specialist', form)
    return createForm.data
  }
)

export const addFormInstitution = createAsyncThunk(
  'forms/addFormInstitution',
  async (form) => {
    const createForm = await axios.post('/institution', form)
    return createForm.data
  }
)

export const addFormAlliance = createAsyncThunk(
  'forms/addFormAlliance',
  async (form) => {
    data.city = 'Miami'

    const createForm = await axios.post('/organization', form)
    return createForm.data
  }
)

export const addFormContact = createAsyncThunk(
  'forms/contact',
  async (form) => {
    const response = await axios.post('/contact', form)
    return response.data
  }
)
