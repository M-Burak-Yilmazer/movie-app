import React, { useState, useEffect, useContext } from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import Content from "../components/Content";
import { Link, useNavigate } from "react-router-dom";
import CustomPagination from "../components/CustomPagination";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const {currentUser}=useContext(AuthContext)

  

  const apiKey = process.env.REACT_APP_API_KEY;
  // const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  const baseUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}`;
  const searchUrl = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${search}&page=${page}`;
  // "https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1"

  const getMovies = (baseUrl) => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
        setNumOfPages(res.total_pages);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search && currentUser) {
      console.log("value yok");
      getMovies(baseUrl);
    } else {
      getMovies(searchUrl);
    }
    setSearch("");
  };

  useEffect(() => {
    window.scroll(0, 0);
    getMovies(baseUrl);
  }, [page]);
  console.log(movies);

  return (
    <div className="w-full ">
      <form onSubmit={handleSearch} className=" mx-auto mt-5 p-3">
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
            className="block w-full mt-1 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Movies..."
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
      <h1 className="text-5xl mt-5 dark:text-[#E50914] dark:text-white text-black text-center ">
        NOW TRENDS
      </h1>

      <div className="text-center mt-5 pb-16  flex flex-wrap items-center justify-around gap-6">
        {movies &&
          movies.map((item) => (
            <Content key={item.id} item={item} media_type={item.media_type} />
          ))}
      </div>
      <CustomPagination setPage={setPage} numOfPages={numOfPages} />
    </div>
  );
}

export default Home;
