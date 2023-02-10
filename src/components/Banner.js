import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Banner.css";

const baseUrl = "https://image.tmdb.org/t/p/w500/";

function Banner({ url }) {
  const [bannerposter, setBannerPoster] = useState([]);

  const FetchDataBanner = async (url) => {
    const res = await axios.get(url);
    setBannerPoster(
      res.data.results[Math.floor(Math.random() * res.data.results.length)]
    );
    return res;
  };
  useEffect(() => {
    FetchDataBanner(url);
  }, [url]);
  console.log(bannerposter);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="mainHeader"
      style={{
        backgroundImage: `url(${baseUrl}${bannerposter?.poster_path})`,
      }}
    >
      <div className="details">
        <h1 className="banner-title">
          {bannerposter?.title ||
            bannerposter?.name ||
            bannerposter?.original_title}
        </h1>
        <div className="banner-btns-div">
          <button className="banner-btns">play</button>
          <button className="banner-btns">My List</button>
        </div>
        <p className="banner-description">
          {truncate(bannerposter?.overview, 150)}
        </p>
      </div>
      <div className="banner-fade"></div>
    </header>
  );
}

export default Banner;
