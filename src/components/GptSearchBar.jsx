import React, { useEffect } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/config";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12 bg-black rounded-lg">
        <input
          className="col-span-9 py-2 px-4 m-2 border border-black rounded-full "
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="col-span-3 py-2 px-4 m-2 bg-green-600 rounded-full">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
