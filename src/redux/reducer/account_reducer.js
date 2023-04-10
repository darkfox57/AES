import { createSlice } from '@reduxjs/toolkit'
import { getUser, logOut, login, userValidation } from '../actions/account_actions'

const initialState = {
  user: {},
  status: '',
  validation: '',
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
      .addCase(logOut.fulfilled, (state, action) => {
        state.status = action.payload
      })
      .addCase(userValidation.fulfilled, (state, action) => {
        state.validation = action.payload
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload
      })
  },
})

export default usersSlice.reducer