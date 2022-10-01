import "../../index.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
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
  const [selectedPost, setSelectedPost] = useState(null);
  const [movieId, setMovieId] = useState("");
  const [movieData, setMovieData] = useState({});
  const [genres, setGenres] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [topRated, setTopRated] = useState([]);
  // const [popular, setPopular] = useState({});
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      .then(setIsLoading(false))
      .catch((err) => console.error(`Error: ${err.status}`));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    api
      .getComingSoon()
      .then((data) => {
        setComingSoon(data.results);
      })
      .then(setIsLoading(false))
      .catch((err) => console.error(`Error: ${err.status}`));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    api
      .getTopRated()
      .then((data) => {
        setTopRated(data.results);
      })
      .then(setIsLoading(false))
      .catch((err) => console.error(`Error: ${err.status}`));
  }, []);

  //Pass the movieId
  // Load The extended movie data from the individual movies object

  function handleSimilarMovies(movieId) {
    if (selectedPost) {
      setIsLoading(true);
      api
        .getSimilarMovies(movieId)
        .then((data) => {
          setSimilarMovies(data.results);
        })
        .then(setIsLoading(false))
        .catch((err) => console.error(`Error: ${err.status}`));
    }
  }

  function handleAboutMovieData(movieId) {
    if (selectedPost) {
      setIsLoading(true);
      api
        .getMovieData(movieId)
        .then((movieData) => {
          setMovieData(movieData);
          const genreString = movieData.genres.map((item) => item.name);
          setGenres(genreString.join(" | "));
          setIsLoading(false);
        })
        .catch((err) => console.error(`Error: ${err.status}`));
    }
  }

  function handleSearch(search) {
    if (search) {
      setIsLoading(true);
      api
        .searchMovie(search)
        .then((data) => {
          setSearchResults(data.results);
        })
        .then(setIsLoading(false))
        .catch((err) => console.error(`Error: ${err.status}`));
    }
  }

  useEffect(() => {
    handleSearch(search);
  }, [search]);
  useEffect(() => {
    handleAboutMovieData(movieId);
    handleSimilarMovies(movieId);
  }, [selectedPost]);

  function handlePostClick(post) {
    setSelectedPost(post);
    setMovieId(post.id.toString());
    setIsAboutOpen(true);
  }
  function handleAboutPopupOpen() {
    return setIsAboutOpen(true);
  }

  function handleMobileMenuOpen() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  function handleCloseMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function handleClosePopup() {
    setSelectedPost(null);
    setSimilarMovies([]);
    setIsAboutOpen(false);
  }

  return (
    <section className="page">
      <Preloader isLoading={isLoading} preloadStyles={"preloader__app"} />
      <Header
        search={search}
        setSearch={setSearch}
        isOpen={isMobileMenuOpen}
        handleOpen={handleMobileMenuOpen}
        onClose={handleCloseMobileMenu}
      />

      <Nav
        setSearch={setSearch}
        search={search}
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMobileMenu}
      />
      <Switch>
        <Route path="/home">
          <Home
            nowPlaying={nowPlaying}
            comingSoon={comingSoon}
            topRated={topRated}
            onAboutPopupClick={handleAboutPopupOpen}
            onPostClick={handlePostClick}
            isOpen={isAboutPopupOpen}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/now-playing">
          <Main
            pageTitle={"Now Playing"}
            isLoading={isLoading}
            collection={nowPlaying}
            onAboutPopupClick={handleAboutPopupOpen}
            onPostClick={handlePostClick}
            isOpen={isAboutPopupOpen}
          />
        </Route>
        <Route path="/coming-soon">
          <Main
            pageTitle={"Coming Soon"}
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
            pageTitle={"Top Rated Movies"}
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
            pageTitle={"Search Results: "}
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
