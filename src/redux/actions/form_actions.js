import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const addFormSpecialist = createAsyncThunk(
  'forms/addFormSpecialist',
  async (form) => {
    const createForm = await axios.post('/form/especialista', form)
    return createForm.data
  }
)

export const addFormInstitution = createAsyncThunk(
  'forms/addFormInstitution',
  async (form) => {
    const createForm = await axios.post('/form/organizaciones', form)
    return createForm.data
  }
)

export const addFormAlliance = createAsyncThunk(
  'forms/addFormAlliance',
  async (form) => {
    const createForm = await axios.post('/form/alianzas', form)
    return createForm.data
  }
)

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
