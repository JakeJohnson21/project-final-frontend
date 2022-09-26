import "../../index.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import api from "../../utils/api";

function App() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [comingSoon, setComingSoon] = useState([]);
  const [isAboutPopupOpen, setIsAboutOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});
  const [movieId, setMovieId] = useState("");
  const [movieData, setMovieData] = useState({});
  const [genres, setGenres] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [topRated, setTopRated] = useState([]);
  // const [popular, setPopular] = useState({});
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  // GET the "now playing" collection with  brief data
  // to display on the post cover
  // GET movieId from each object

  useEffect(() => {
    setIsLoading(true);
    api
      .getNowPlaying()
      .then((data) => {
        setNowPlaying(data.results);
      })
      .catch((err) => console.error(`Error: ${err.status}`))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    api
      .getComingSoon()
      .then((data) => {
        setComingSoon(data.results);
      })
      .catch((err) => console.error(`Error: ${err.status}`))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    api
      .getTopRated()
      .then((data) => {
        setTopRated(data.results);
      })
      .catch((err) => console.error(`Error: ${err.status}`))
      .finally(() => setIsLoading(false));
  }, []);

  //Pass the movieId
  // Load The extended movie data from the individual movies object

  useEffect(() => {
    setIsLoading(true);
    api
      .getSimilarMovies(movieId)
      .then((data) => {
        setSimilarMovies(data.results);
      })
      .catch((err) => console.error(`Error: ${err.status}`))
      .finally(() => setIsLoading(false));
  }, [selectedPost]);

  useEffect(() => {
    setIsLoading(true);
    api
      .getMovieData(movieId)
      .then((movieData) => {
        setMovieData(movieData);
        const genreString = movieData.genres.map((item) => item.name);
        setGenres(genreString.join(" | "));
      })
      .catch((err) => console.error(`Error: ${err.status}`))
      .finally(() => setIsLoading(false));
  }, [selectedPost]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      api
        .searchMovie(search)
        .then((data) => {
          setSearchResults(data.results);
        })
        .catch((err) => console.error(`Error: ${err.status}`))
        .finally(() => setIsLoading(false));
    }, 1000);
  }, [search]);

  function handlePostClick(post) {
    setSelectedPost(post);
    setMovieId(post.id.toString());
  }
  function handleAboutPopupOpen() {
    setIsAboutOpen(true);
  }
  function handleClosePopup() {
    setIsAboutOpen(false);
  }

  return (
    <section className="page">
      <Preloader isLoading={isLoading} preloadStyles={"preloader__app"} />
      <Header />

      <Nav setSearch={setSearch} search={search} />
      <Switch>
        <Route path="/now-playing">
          <Main
            isLoading={isLoading}
            collection={nowPlaying}
            onAboutPopupClick={handleAboutPopupOpen}
            onPostClick={handlePostClick}
            isOpen={isAboutPopupOpen}
          />
        </Route>
        <Route path="/coming-soon">
          <Main
            path="/coming-soon"
            isLoading={isLoading}
            collection={comingSoon}
            onAboutPopupClick={handleAboutPopupOpen}
            onPostClick={handlePostClick}
            isOpen={isAboutPopupOpen}
          />
        </Route>
        <Route path="/top-rated">
          <Main
            path="/coming-soon"
            isLoading={isLoading}
            collection={topRated}
            onAboutPopupClick={handleAboutPopupOpen}
            onPostClick={handlePostClick}
            isOpen={isAboutPopupOpen}
          />
        </Route>
        <Route path="/search">
          <Main
            closePopup={handleClosePopup}
            path="/search"
            isLoading={isLoading}
            collection={searchResults}
            onAboutPopupClick={handleAboutPopupOpen}
            onPostClick={handlePostClick}
            isOpen={isAboutPopupOpen}
          />
        </Route>
      </Switch>

      <About
        isLoading={isLoading}
        isOpen={isAboutPopupOpen}
        onClose={handleClosePopup}
        movieData={movieData}
        genres={genres}
        collection={similarMovies}
        onPostClick={handlePostClick}
        onAboutPopupOpen={handleAboutPopupOpen}
      />
      <Footer />
    </section>
  );
}

export default App;
