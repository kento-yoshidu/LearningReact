import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const sleep = (msec: number) => {
  
}
export const customCounterSlice = createSlice({
  name: 'customCounter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = customCounterSlice.actions;

export const selectCount = (state) => state.customCounter.value;

export default customCounterSlice.reducer;
