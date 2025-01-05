import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConainer from "./SecondaryConainer";
import useTopRatedMovies from "../hooks/useTopRatedMoves";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  const showGptSearchView = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearchView ? (
        <>
          <MainContainer />
          <SecondaryConainer />
        </>
      ) : (
        <>
          <GptSearch />
          {/* /** 
  ()
  MainContainer:
       - background video
       - background title
  Secoundcontrainer
       - Movies * n
           - MovieCard * n
  */}
        </>
      )}
    </div>
  );
};

export default Browse;
