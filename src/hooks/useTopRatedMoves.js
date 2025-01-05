import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMoves } from "../utils/moviesSlice";
import { useEffect } from "react";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        API_OPTIONS
      );

      const json = await data.json();

      // console.log(json);

      dispatch(addTopRatedMoves(json.results));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRatedMovies;
