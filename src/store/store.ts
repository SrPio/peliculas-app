import { configureStore } from "@reduxjs/toolkit";
import movies from "./slices/movies/slideMovies";
import series from "./slices/series/slideSeries";

export const store = configureStore({
  reducer: {
    movies,
    series,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
