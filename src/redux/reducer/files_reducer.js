import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fileUrl: null,
};

const fileSlice = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setFileUrl: (state, action) => {
      state.fileUrl = action.payload;
    },
  },
});

export const { setFileUrl } = fileSlice.actions;
export default fileSlice.reducer;