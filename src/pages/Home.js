import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(null);

  const navigate = useNavigate();

  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`;

  const getMovies = (baseUrl) => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((res) => setMovies(res.results));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) {
      console.log("value yok");
      getMovies(baseUrl);
    } else {
      getMovies(searchUrl);
    }
    setSearch("");
  };

  useEffect(() => {
    getMovies(baseUrl);
  }, []);
  console.log(movies);

  return (
    <>
      <form onSubmit={handleSearch} className="w-[500px] mx-auto mt-10">
        <label
          htmlFor="default-search"
          className="mb-2 mt-3 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full mt-4 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required=""
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="text-center pb-16  flex flex-wrap gap-6 mt-6 px-5">
        {movies.map((item) => (
          <div
            key={item.id}
            className="w-[350px] h-[530px]   max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto text-center"
          >
            <div>
              <img
                className="w-[350px] h-[350px] mx-auto p-8 rounded-t-lg"
                src={
                  item.backdrop_path
                    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    : "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                }
                alt="productimage"
              />
            </div>

            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                
                <h5 className="text-sm font-semibold mt-3 tracking-tight text-gray-900 dark:text-white">
                  IMDB : {item.vote_average}
                </h5>
              </a>
            </div>
            <div className=" items-center text-center ">
              <button
                onClick={() => navigate(`/movies/${item.id}`)}
                className="text-white bg-[#9F5EB3] hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-700 dark:hover:bg-pink-900 dark:focus:ring-blue-800"
              >
                More Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
