import React from "react";
import { CDN_IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-6">
      <img alt="image_poster" src={CDN_IMAGE_URL + posterPath}></img>
    </div>
  );
};

export default MovieCard;
