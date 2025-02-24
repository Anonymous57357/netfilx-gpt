import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopular = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        API_OPTIONS
      );

      const json = await data.json();

      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);
};

export default usePopularMovies;
