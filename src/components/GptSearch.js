import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { LOGIN_BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img
          className="absolute -z-10"
          src={LOGIN_BACKGROUND_IMAGE}
          alt="background-image"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
