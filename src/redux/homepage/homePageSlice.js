import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { leagues: [], status: 'idle' };

export const fetchLeagues = createAsyncThunk('fetch/fetchLeagues', async () => {
  const response = await axios.get(
    'https://api-football-standings.azharimm.dev/leagues',
  );
  return response.data;
});

const homePageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLeagues.fulfilled, (state, { payload }) => {
        const newArr = [];
        payload.data.forEach((league) => {
          const {
            id,
            logos,
            name,
            slug,
          } = league;
          newArr.push({
            id, logos, name, slug,
          });
        });
        return { ...state, leagues: newArr, status: 'completed' };
      })
      .addCase(fetchLeagues.pending, (state) => ({
        ...state,
        status: 'Loading',
      }));
  },
});

export default homePageSlice.reducer;
