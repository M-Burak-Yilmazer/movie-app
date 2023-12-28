import { Badge, makeStyles } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router";
const useStyles = makeStyles((theme) => ({
  badge: {
    fontSize: "14px",
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    padding: "10px",
  },
}));

const Content = ({ item, media_type }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const roundedValue = parseFloat(item.vote_average.toFixed(1));
  return (
    <div
      onClick={() =>
        navigate(`/movies/${item.id}`, {
          state: { from: item.media_type, media: media_type },
        })
      }
      className="hover:bg-white dark:bg-[#000000] dark:text-[#E50914] bg-slate-300 rounded cursor-pointer hover:text-black flex flex-col justify-around flex-wrap w-46 sm:w-[300px] sm:h-[550px]  p-[5px] m-5 my-[5px]   "
    >
      <Badge
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ "& .MuiBadge-badge": { fontSize: 16, height: 25, minWidth: 25 } }}
        badgeContent={roundedValue}
        color={item.vote_average > 6 ? "primary" : "error"}
        classes={{ badge: classes.badge }}
      />
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
