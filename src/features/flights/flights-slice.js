import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
  },
  extraReducers : {

  }
});

export const { increment } = flightsSlice.actions;

export const selectCount = state => state.counter.value;

export default flightsSlice.reducer;
