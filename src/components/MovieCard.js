import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./MovieCard.css";

const MovieCard = () => {
  const { id } = useParams();
  console.log(id);

  const [movie, setMovie] = useState([]);
  const [key, setKey] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;

  const getMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((res) => setMovie(res));
  };

  const getvideo = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((res) => setKey(res.results[0].key));
  };

  useEffect(() => {
    getMovie();
    getvideo();
  }, []);
  console.log(movie);

  const newkey = `https://www.youtube.com/watch?v=${key}`;
  console.log(newkey);

  return (
    <div className="flex h-screen dark:bg-zinc-800 flex-col lg:flex-row justify-center items-center">
      <div className="hidden sm:block ms-5  mt-5 flex-1  text-center  ">
        <iframe
          width={500}
          height={350}
          src={`https://www.youtube.com/embed/${key}`}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="flex-1 flex justify-center items-center mt-5">
        <div
          href="#"
          className="  flex items-center  bg-slate-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl md:h-[400px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-w-[400px]"
        >
          <img
            className="flex-1 w-[100px] sm:w-[300px] md:h-[400px]  rounded-t-lg  md:w-48 md:rounded-none md:rounded-s-lg"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <div className="flex-1 flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.original_title}
            </h5>
            <p className="mb-3 font-semibold line-clamp-3 md:line-clamp-none   text-gray-700 dark:text-gray-400">
              {"Release Date : " + movie.release_date}
            </p>
            <p className="mb-3  line-clamp-3 md:line-clamp-none  font-normal text-gray-700 dark:text-gray-400">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
