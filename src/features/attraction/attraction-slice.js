import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const attractionSlice = createSlice({
  name: 'attraction',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
  },
  extraReducers : {

  }
});

export const { increment } = attractionSlice.actions;

export const selectCount = state => state.counter.value;

export default attractionSlice.reducer;
