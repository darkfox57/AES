import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import Swal from 'sweetalert2'
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
    const response = await axios('country')
    return response.data
  }
)

export const getAreas = createAsyncThunk('form/areas', async () => {
  const response = await axios('/areas')
  return response.data
})

export const addFormSpecialist = createAsyncThunk(
  'forms/addFormSpecialist',
  async (form) => {
    try {

      const response = await axios.post('specialist', form)
      if (response.data.message) {

        await Swal.fire({
          icon: 'success',
          title: 'Genial',
          text: response.data.message,
        })
      }
      return response.data
    }
    catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.error}`,
      })
    }
  }
)

export const addFormInstitution = createAsyncThunk(
  'forms/addFormInstitution',
  async (form) => {
    try {

      const response = await axios.post('institution', form)

      if (response.data.message) {

        await Swal.fire({
          icon: 'success',
          title: 'Genial',
          text: response.data.message,
        })
      }
      return response.data
    }
    catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.error}`,
      })
    }
  }
)

export const addFormAlliance = createAsyncThunk(
  'forms/addFormAlliance',
  async (form) => {
    try {

      const response = await axios.post('organization', form)
      if (response.data.message) {

        await Swal.fire({
          icon: 'success',
          title: 'Genial',
          text: response.data.message,
        })
      }
      return response.data
    }
    catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.error}`,
      })
    }
  }
)

export const addFormContact = createAsyncThunk(
  'forms/contact',
  async (form) => {
    try {

      const response = await axios.post('contact', form)
      if (response.data.message) {

        await Swal.fire({
          icon: 'success',
          title: 'Genial',
          text: response.data.message,
        })
      }
      return response.data
    }
    catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.error}`,
      })
    }
  }
)

export const addFormSuscription = createAsyncThunk(
  'forms/suscription',
  async (form) => {
    try {
      const response = await axios.post('suscription', form)
      if (response.data.message) {

        await Swal.fire({
          icon: 'success',
          title: 'Genial',
          text: response.data.message,
        })
      }
      return response.data
    }
    catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.error}`,
      })
    }

  }
)

export const deleteFormSuscription = createAsyncThunk(
  'forms/desuscription',
  async (email) => {
    try {

      const response = await axios.delete(`suscription/delete?email=${email}`)
      if (response.data.message) {

        await Swal.fire({
          icon: 'success',
          title: 'Genial',
          text: response.data.message,
        })
      }
      return response.data
    }
    catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.response.data.error}`,
      })
    }

  }
)
