import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    setFilter: (state, action) => void (state.value = action.payload),
  },
});

export const { setFilter } = filterSlice.actions;
