import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";

const appStore = configureStore({
  // reducers
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default appStore;
