export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const LOGIN_BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWQ4YTJjZGZmYjhkZTljZDM4YjgzMzJmMTczZDk5YyIsIm5iZiI6MTcyMjkzNDM1Mi45MTkzNzQsInN1YiI6IjY1OWU1YzMyY2I3NWQxMDFmYzEwZjJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jU7aoGpZot6NR6Q3I2RlBG8jtm2rOQAQ49yhG5_teYU",
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const NOW_PLAYING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
export const GPT_QUERY_PREFIX =
  "Act as a movie recommendation system and suggest some movies for the query : ";
export const GPT_QUERY_POSTFIX =
  ". Only give me the names of five 10 movies, comma separated like the example given ahead. Example : Interstellar, Avengers, Ironman, Big Hero 6, Avengers Endgame.";
