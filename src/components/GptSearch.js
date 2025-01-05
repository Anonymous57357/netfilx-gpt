import React from "react";
import GptMovieSuggesstions from "./GptMovieSuggesstions";
import GptSearchBar from "./GptSearchBar";
import { APP_BANNER } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img alt="app-background" src={APP_BANNER}></img>
      </div>
      <h1>
        <GptSearchBar />
        <GptMovieSuggesstions />
      </h1>
    </div>
  );
};

export default GptSearch;
