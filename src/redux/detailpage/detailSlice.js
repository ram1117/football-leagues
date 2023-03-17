import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  name: '',
  standings: [],
  season: '',
  status: 'idle',
};
export const fetchDetail = createAsyncThunk(
  'detail/fetchDetail',
  async ({ id, season }) => {
    const response = await axios.get(
      `https://api-football-standings.azharimm.dev/leagues/${id}/standings?season=${season}&sort=asc`,
    );
    return response.data;
  },
);
const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    resetState: (state) => ({
      ...state,
      name: '',
      standings: [],
      season: '',
      status: 'idle',
    }),
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDetail.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchDetail.fulfilled, (state, { payload }) => {
        const newState = {
          ...state,
          name: payload.data.name,
          season: payload.data.season,
          standings: payload.data.standings,
          status: 'completed',
        };
        return newState;
      });
  },
});

export const { resetState } = detailSlice.actions;
export default detailSlice.reducer;
