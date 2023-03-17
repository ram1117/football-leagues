import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { topleagues: [], leagues: [], status: 'idle' };

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
        const topArr = [];
        const newArr = [];
        payload.data.forEach((league) => {
          const {
            id,
            logos,
            name,
            slug,
          } = league;
          if (
            league.id === 'eng.1'
            || league.id === 'fra.1'
            || league.id === 'ger.1'
            || league.id === 'ita.1'
            || league.id === 'por.1'
            || league.id === 'esp.1'
          ) {
            topArr.push({
              id,
              logos,
              name,
              slug,
            });
          } else {
            newArr.push({
              id,
              logos,
              name,
              slug,
            });
          }
        });
        return {
          ...state,
          topleagues: topArr,
          leagues: newArr,
          status: 'completed',
        };
      })
      .addCase(fetchLeagues.pending, (state) => ({
        ...state,
        status: 'Loading',
      }));
  },
});

export default homePageSlice.reducer;
