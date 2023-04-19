import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const token = localStorage.getItem('access_token')

export const getAllForms = createAsyncThunk('forms', async () => {
  const allForms = await axios('forms', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return allForms.data
})

export const getAllCountries = createAsyncThunk(
  'form/getAllCountries',
  async () => {
    const allCountries = await axios('country')
    return allCountries.data
  }
)

export const getAreas = createAsyncThunk('form/areas', async () => {
  const response = await axios('/areas')
  return response.data
})

export const addFormSpecialist = createAsyncThunk(
  'forms/addFormSpecialist',
  async (form) => {
    const createForm = await axios.post('specialist', form)
    return createForm.data
  }
)

export const addFormInstitution = createAsyncThunk(
  'forms/addFormInstitution',
  async (form) => {
    const createForm = await axios.post('institution', form)
    return createForm.data
  }
)

export const addFormAlliance = createAsyncThunk(
  'forms/addFormAlliance',
  async (form) => {
    const createForm = await axios.post('organization', form)
    return createForm.data
  }
)

export const addFormContact = createAsyncThunk(
  'forms/contact',
  async (form) => {
    const response = await axios.post('contact', form)
    return response.data
  }
)

export const addFormSuscription = createAsyncThunk(
  'forms/suscription',
  async (form) => {
    const response = await axios.post('suscription', form)
    return response.data
  }
)

export const deleteFormSuscription = createAsyncThunk(
  'forms/desuscription',
  async (email) => {
    const response = await axios.delete(`suscription/delete?email=${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }
)
