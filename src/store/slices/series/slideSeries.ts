import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export interface CounterState {
  list: number[];
}

const initialState: CounterState = {
  list: [],
};

export const serieSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    setSeriesList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setSeriesList } = serieSlice.actions;

export default serieSlice.reducer;

export const fecthAllSeries = () => (dispatch: Dispatch) => {
  axios
    .get(
      "https://api.themoviedb.org/3/tv/popular?api_key=a229b5918983bc728da2ec3136264745"
    )
    .then((response) => {
      dispatch(setSeriesList(response.data.results));
    })
    .catch((error) => {
      console.log(error);
    });
};
