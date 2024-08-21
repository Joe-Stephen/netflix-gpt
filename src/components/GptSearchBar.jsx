import React, { useEffect, useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../utils/config";
import openai from "../utils/openai";
import { GPT_QUERY_POSTFIX, GPT_QUERY_PREFIX } from "../utils/constants";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const handleGptSearchClick = async () => {
    const gptQuery =
      GPT_QUERY_PREFIX + searchText.current.value + GPT_QUERY_POSTFIX;
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log("results :", gptResults.choices);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12 bg-black rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-9 py-2 px-4 m-2 border border-black rounded-full "
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="col-span-3 py-2 px-4 m-2 bg-green-600 rounded-full"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
