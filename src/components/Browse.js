import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConainer from "./SecondaryConainer";
import useTopRatedMovies from "../hooks/useTopRatedMoves";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {

  useNowPlayingMovies();
  useTopRatedMovies()
  usePopularMovies()
  useUpcomingMovies()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryConainer />
      {/* /** 
()
      MainContainer:
           - background video
           - background title
      Secoundcontrainer
           - Movies * n
               - MovieCard * n
      */}
    </div>
  );
};

export default Browse;
