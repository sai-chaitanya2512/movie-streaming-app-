import React from "react";
import "./App.css";
import requests from "./request";
import Rows from "./components/Rows";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner url={requests.trending} />

      <Rows
        title="NETFLIX ORIGINALS"
        url={requests.netflixOriginals}
        islargerows
      />
      <Rows title="TRENDING" url={requests.trending} />
      <Rows title="TOP RATED" url={requests.topRated} />
      <Rows title="ACTION MOVIES" url={requests.ActionMovies} />
      <Rows title="COMEDY MOVIES" url={requests.comedyMovies} />
      <Rows title="HORROR MOVIES" url={requests.horrorMovies} />
      <Rows title="ROMANTIC MOVIES" url={requests.romanceMovies} />
      <Rows title="DOCUMENTRIES" url={requests.documentaries} />
    </div>
  );
}

export default App;
