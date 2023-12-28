import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Carousel from "./Carousel"


import "./MovieCard.css";

const MovieCard = () => {
  const { id } = useParams();
  console.log(id);
  const location = useLocation();
  const movieType = location.state?.from;
  const media=location.state?.media
 
  const [movie, setMovie] = useState([]);
  const [key, setKey] = useState("");

  const apiKey = process.env.REACT_APP_API_KEY;

  const getMovie = () => {
    fetch(`https://api.themoviedb.org/3/${media}/${id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((res) => setMovie(res));
  };

  const getvideo = () => {
    fetch(
      `https://api.themoviedb.org/3/${media}/${id}/videos?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((res) => setKey(res.results[0]?.key));
  };

  useEffect(() => {
    getMovie();
    getvideo();
  }, []);
  console.log(movie);



  return (
    <div className="flex justify-around h-screen dark:bg-zinc-800 flex-col pt-[80px] pb-[150px] lg:flex-row  items-center">
      <div className="hidden md:block ms-5  mt-5  text-center  ">
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
      <div className="flex flex-col gap-3 justify-center items-center text-center">
        <div className="flex-3 flex-col justify-center items-center mt-5">
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
                {movie.original_title || movie.name}
              </h5>
              <p className="mb-3 font-semibold line-clamp-3 md:line-clamp-none   text-gray-700 dark:text-gray-400">
                Release Date : {movie.release_date || movie.first_air_date}
              </p>
              <p className="mb-3  line-clamp-3 md:line-clamp-none  font-normal text-gray-700 dark:text-gray-400">
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-[400px] sm:w-[600px] bg-slate-900  text-start  rounded">
          <Carousel id={id} media={media} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
  // <Carousel id={id} media={media} />;