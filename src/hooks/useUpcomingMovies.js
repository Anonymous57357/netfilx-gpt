import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpoming = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        API_OPTIONS
      );

      const json = await data.json();

      console.log(json);

      dispatch(addUpComingMovies(json.results));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUpoming();
  }, []);
};

export default useUpcomingMovies;
