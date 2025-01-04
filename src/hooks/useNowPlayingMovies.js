import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPLayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );

      const json = await data.json();

      dispatch(addNowPLayingMovies(json.results));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getNowPlaying();
  }, []);
};

export default useNowPlayingMovies;
