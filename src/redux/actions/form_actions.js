import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const addFormSpecialist = createAsyncThunk(
  'forms/addForm',
  async (form) => {
    const createForm = await axios.post('/forms/especialista', form)
    return createForm.data
  }
)

export const addFormInstitution = createAsyncThunk(
  'forms/addForm',
  async (form) => {
    const createForm = await axios.post('/forms/organizaciones', form)
    return createForm.data
  }
)

export const addFormAlliance = createAsyncThunk(
  'forms/addForm',
  async (form) => {
    const createForm = await axios.post('/forms/alianzas', form)
    return createForm.data
  }
)

export const getAllForms = createAsyncThunk('/forms', async () => {
  const allForms = await axios('/forms')
  return allForms.data
})
