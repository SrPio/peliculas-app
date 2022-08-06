import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { idParams } from "../../../componets/Movies/OneMovie";

export interface CounterState {
  list: number[];
}

const initialState: CounterState = {
  list: [],
};

export const movieOneSlice = createSlice({
  name: "oneMovie",
  initialState,
  reducers: {
    setOneMovie: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setOneMovie } = movieOneSlice.actions;

export default movieOneSlice.reducer;

export const fecthOneMovie = (id: idParams) => (dispatch: Dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id.id}?api_key=a229b5918983bc728da2ec3136264745`
    )
    .then((response) => {
      let posterLink = `http://image.tmdb.org/t/p/original/${response.data.poster_path}`;
      let backdropLink = `http://image.tmdb.org/t/p/original/${response.data.backdrop_path}`;
      dispatch(
        setOneMovie({
          name: response.data.title,
          description: response.data.overview,
          poster: posterLink,
          backdrop: backdropLink,
        })
      );
    })
    .catch((error) => {
      console.log(error);
    });
};
