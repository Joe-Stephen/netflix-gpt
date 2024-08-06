import React from "react";
import { useSelector } from "react-redux";
import VIdeoTitle from "./VIdeoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  let movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[3];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VIdeoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
