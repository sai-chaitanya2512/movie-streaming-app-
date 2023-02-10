import React, { useState, useEffect } from "react";
import "../styles/Rows.css";
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/w500/";

// /pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg

function Rows({ title, url, islargerows }) {
  const [data, setData] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const fetchData = async (url) => {
    const responce = await axios.get(url);
    setData(responce.data.results);
    return responce;
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
  console.log(data);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((urls) => {
          const urlparams = new URLSearchParams(new URL(urls).search);
          setTrailerUrl(urlparams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  function onReady(event) {
    event.target.pauseVideo();
  }

  return (
    <div className="rows">
      <h1 className="title">{title}</h1>

      <div className="posters-row">
        {data.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className="poster"
              src={`${baseUrl}${
                islargerows ? movie?.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            ></img>
          );
        })}
      </div>
      {trailerUrl && (
        <YouTube videoId={trailerUrl} opts={opts} onReady={onReady} />
      )}
    </div>
  );
}

export default Rows;
