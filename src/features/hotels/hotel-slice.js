import { createSlice } from '@reduxjs/toolkit';

/**
 * 호텔 도메인, 컬렉션 작성할 것
 */

const initialState = {
  value: 0,
};

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
  },
  extraReducers : {

  }
});

export const { increment } = hotelSlice.actions;

export const selectCount = state => state.counter.value;

export default hotelSlice.reducer;
