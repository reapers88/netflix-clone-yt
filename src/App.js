import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import Nav from "./Nav";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      <Nav />
      <HomeScreen />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Ratings" fetchUrl={requests.fetchTopRated} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
