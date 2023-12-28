import React from "react";
import { useNavigate } from "react-router";

const Content = ({ item, media_type }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/movies/${item.id}`, { state: { from: item.media_type ,media: media_type} })
      }
      className="hover:bg-white rounded cursor-pointer hover:text-black flex flex-col justify-around flex-wrap w-46 sm:w-[300px]  p-[5px] m-5 my-[5px] bg-[#282c34]  "
    >
      <img
        className=" "
        src={
          item?.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        }
        alt="productimage"
      />

      <b className="w-100 text-center mt-3 text-[1rem] px-[8px]">
        {item.title || item.name}
      </b>
      <span className="flex justify-between pb-2 px-2">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className=" ">{item.first_air_date || item.release_date}</span>
      </span>
    </div>
  );
};

export default Content;
