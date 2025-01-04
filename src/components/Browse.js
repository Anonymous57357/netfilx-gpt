import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConainer from "./SecondaryConainer";

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryConainer />
      {/* /** 

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
