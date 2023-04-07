import { createSlice } from '@reduxjs/toolkit'
import { login } from '../actions/account_actions'

const initialState = {
 user: {},
 status: '',
 error: null
}


const usersSlice = createSlice({
 name: 'users',
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(login.fulfilled, (state, action) => {
    state.status = action.payload
   })
   .addCase(login.rejected, (state, action) => {
    state.error = action.error.message
   })
 },
})

export default usersSlice.reducer