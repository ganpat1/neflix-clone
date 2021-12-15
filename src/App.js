import React from "react";
import "./App.css";
import Nav from "./Nav";
import Row from "./Row";
import Request, { RequestTvShows } from "./Request";
import Header from "./Header";
import TvShows from "./TvShows";

const App = () => {
  return (
    <>
      <Nav />
      <Header
        Netflix_originals
        fetchUrl={Request.fetchScienceFiction}
        catagory="tv"
      />
      <Row
        title="NETFLIX ORIGINALS"
        Netflix_originals
        fetchUrl={Request.fetchNetflixOriginals}
        catagory="tv"
      />
      <TvShows
        title="TRANDING TV-SHOWS"
        Netflix_originals
        fetchUrl={RequestTvShows.fetchTVShows}
        catagory="tv"
      />
      <Row title="Trending" fetchUrl={Request.fetchTrending} catagory="tv" />{" "}
      {/* <Row title="Top Rated" fetchUrl={Request.fetchTopRated} catagory="tv"/> */}
      <Row
        title="Action Muvies"
        fetchUrl={Request.fetchActionMovies}
        catagory="tv"
      />
      <Row
        title="Comedy Muvies"
        fetchUrl={Request.fetchComedyMovies}
        catagory="tv"
      />
      <Row
        title="Horror Muvies"
        fetchUrl={Request.fetchHorrorMovies}
        catagory="tv"
      />
      <Row
        title="Romance Muvies"
        fetchUrl={Request.fetchRomanceMovies}
        catagory="tv"
      />
      <Row
        title="Documentaries"
        fetchUrl={Request.fetchDocumentaries}
        catagory="tv"
      />
      <Row title="Adventure" fetchUrl={Request.fetchAdventure} catagory="tv" />
      <Row title="Animation" fetchUrl={Request.fetchAnimation} catagory="tv" />
      <Row title="Crime" fetchUrl={Request.fetchCrime} catagory="tv" />
      <Row title="Drama" fetchUrl={Request.fetchDrama} catagory="tv" />
      <Row title="Family" fetchUrl={Request.fetchFamily} catagory="tv" />
      <Row title="Fantasy" fetchUrl={Request.fetchFantasy} catagory="tv" />
      <Row title="History" fetchUrl={Request.fetchHistory} catagory="tv" />
      <Row title="Mystery" fetchUrl={Request.fetchMystery} catagory="tv" />
      <Row
        title="ScienceFiction"
        fetchUrl={Request.fetchScienceFiction}
        catagory="tv"
      />
    </>
  );
};

export default App;
