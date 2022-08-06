import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { idParams } from "../../../componets/Movies/OneMovie";

export interface CounterState {
  list: number[];
}

const initialState: CounterState = {
  list: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMoviesList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setMoviesList } = movieSlice.actions;

export default movieSlice.reducer;

export const fecthAllMovies = () => (dispatch: Dispatch) => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=a229b5918983bc728da2ec3136264745"
    )
    .then((response) => {
      dispatch(setMoviesList(response.data.results));
    })
    .catch((error) => {
      console.log(error);
    });
};
